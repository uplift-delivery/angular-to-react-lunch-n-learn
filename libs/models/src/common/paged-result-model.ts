export type PagedResultModel<T> = {
  items: T[];
  pageNumber: number;
  pageSize: number;
};
