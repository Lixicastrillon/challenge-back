export interface SearchQuery {
  sex?: string;
  name?: RegExp;
  employee?: boolean;
}
export interface queryUsers {
  searchName: string;
  filterBySex: string;
  filterByEmployee: string;
  page: string;
  pageSize: string;
}
