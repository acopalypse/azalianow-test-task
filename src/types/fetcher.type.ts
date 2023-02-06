export interface FetcherOptions {
  endpoint: string;
  method: string;
  variables?: { [key: string]: string | any | undefined };
}

export interface FetcherResults<T> {
  data: T;
}

export interface MessageData {
  author: string;
  text: string;
}

export interface AverageData {
  num: number;
  result?: number;
}
