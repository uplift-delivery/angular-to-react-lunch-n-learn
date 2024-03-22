import { Router } from 'express';

export function createHealthRouter() {
  const router = Router();
  router.get('/', (_, res) => {
    return res.status(200).end();
  });
  return router;
}
