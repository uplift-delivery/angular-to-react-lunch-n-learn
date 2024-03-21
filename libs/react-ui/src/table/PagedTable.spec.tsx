import { test, vi } from 'vitest';
import { render, screen, userEvent } from '../testing/testing-utils';
import { PagedTable } from './PagedTable';
import { ModelFactory } from '@uplift-lunch-n-learn/models/testing';

const getPreviousButton = () =>
  screen.getByRole('button', { name: /previous/i });
const getNextButton = () => screen.getByRole('button', { name: /next/i });

test('when on first page then previous is disabled', () => {
  const page = ModelFactory.pagedResultFromCount(ModelFactory.event, 7);

  render(<PagedTable columns={5} current={page} />);

  expect(getPreviousButton()).toBeDisabled();
});

test('when loading then previous and next are disabled', () => {
  render(<PagedTable columns={5} isLoading={true} />);

  expect(getPreviousButton()).toBeDisabled();
  expect(getNextButton()).toBeDisabled();
});

test('when next clicked then notifies to go to next page', async () => {
  const onNext = vi.fn();
  render(<PagedTable columns={2} onNextPage={onNext} />);

  await userEvent.click(getNextButton());

  expect(onNext).toHaveBeenCalled();
});

test('when previous clicked then notifies to go to previous page', async () => {
  const onPrevious = vi.fn();
  const page = ModelFactory.pagedResultFromItems([], { pageNumber: 5 });
  render(<PagedTable columns={3} onPreviousPage={onPrevious} current={page} />);

  await userEvent.click(getPreviousButton());

  expect(onPrevious).toHaveBeenCalled();
});
