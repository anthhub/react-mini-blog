export interface IPage<T> {
  edges: T[]
  pageInfo: { hasNextPage: boolean; endCursor: string }
}
