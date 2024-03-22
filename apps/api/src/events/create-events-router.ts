import { Router } from 'express';
import { EventEntity } from './event-entity';
import { parseQueryStringAsNumber } from '../shared/parse-query-string';
import { eventsRepository } from './events-repository';

export function createEventsRouter() {
  const router = Router();
  router.get('/', async (req, res) => {
    const pageSize = parseQueryStringAsNumber('pageSize', req) ?? 10;
    const pageNumber = parseQueryStringAsNumber('pageNumber', req) ?? 1;
    const repository = await eventsRepository();
    const events = await repository.find({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      order: {
        name: 'ASC',
        date: 'DESC',
      },
    });

    res
      .status(200)
      .json({
        pageNumber,
        pageSize,
        items: events,
      })
      .end();
  });

  router.get('/:id', async (req, res) => {
    const repository = await eventsRepository();
    const event = await repository.findOneBy({ id: req.params.id });
    if (!event) {
      res.status(404).end();
    } else {
      res.status(200).json(event).end();
    }
  });

  router.post('/', async (req, res) => {
    const repository = await eventsRepository();
    const event = req.body as Omit<EventEntity, 'id'>;
    const result = await repository.save(event);
    res.status(201).json(result).end();
  });

  router.put('/:id', async (req, res) => {
    const repository = await eventsRepository();
    const updates = req.body as EventEntity;
    const existing = await repository.findOneBy({ id: req.params.id });
    if (!existing) {
      res.status(404).end();
      return;
    }
    existing.date = updates.date;
    existing.name = updates.name;
    existing.location = updates.location;
    await repository.save(existing);
    res.status(204).end();
  });

  router.delete('/:id', async (req, res) => {
    const repository = await eventsRepository();
    const existing = await repository.findOneBy({ id: req.params.id });
    if (!existing) {
      res.status(404).end();
      return;
    }

    await repository.delete(existing);
    res.status(204).end();
  });

  router.delete('/', async (req, res) => {
    const repository = await eventsRepository();
    const events = await repository.find();
    if (events.length > 0) {
      await repository.delete(events.map((e) => e.id));
    }
    res.status(204).end();
  });
  return router;
}
