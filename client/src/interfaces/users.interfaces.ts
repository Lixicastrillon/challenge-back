export interface Users {
  _id: string;
  name: string;
  sex: "male" | "female";
  age: number;
  employee: boolean;
}

export interface queryUsers {
  searchName?: string;
  filterBySex?: string;
  filterByEmployee?: string;
  page?: number;
  pageSize?: number;
}

export interface postUser {
  name: string;
  age: number;
  sex: string;
  employee: string;
}
