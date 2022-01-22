export type PagedResponse<T> = {
  items: T[];
  totalCount: number;
};

export type PagedRequest = {
  page: number;
  takeCount?: number;
  skipCount?: number;
};

export type PagedAndSortedRequest = PagedRequest & {
  sorting?: string;
};
