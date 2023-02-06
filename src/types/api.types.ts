export type Methods = string;

export interface Headers {
  endpoint: string;
  method: Methods;
  variables?: { [key: string]: string | any | undefined };
}

export interface Routers {
  [key: string]: Methods[];
}

export interface RoutersList {
  endpoint: string;
  method: Methods;
}

export interface RouterResult extends RoutersList {
  code: number;
  variables?: Headers['variables'];
}

export interface EndpointResult<T> {
  data: T;
}

export interface NotFound {
  message: string;
}

export interface Error {
  message: string;
}
