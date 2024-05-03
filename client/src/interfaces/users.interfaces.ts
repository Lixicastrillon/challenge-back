export interface Users {
  name: String;
  sex: "male" | "female";
  age: number;
  employee: boolean;
}

export interface queryUsers {
  searchName?: string;
  filterBySex?: string;
  filterByEmployee?: string;
  page?: string;
  pageSize?: string;
}
