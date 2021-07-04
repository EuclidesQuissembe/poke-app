export interface APIData<Data> {
  results: number;
  response: Data;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
