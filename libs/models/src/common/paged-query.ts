export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE_NUMBER = 1;

export type PagedQuery = {
  pageSize: number;
  pageNumber: number;
};

export function pagedQueryToParams(
  query?: Partial<PagedQuery> | void
): URLSearchParams {
  const params = new URLSearchParams();
  params.set('pageSize', `${query?.pageSize ?? DEFAULT_PAGE_SIZE}`);
  params.set('pageNumber', `${query?.pageNumber ?? DEFAULT_PAGE_NUMBER}`);
  return params;
}
