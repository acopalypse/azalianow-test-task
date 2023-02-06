export interface FetcherOptions {
  endpoint: string;
  method: string;
  variables?: { [key: string]: string | any | undefined };
}

export interface FetcherResult<T> {
  data: T;
}

export interface MessageData {
  author: string;
  message: string;
}

export interface AverageData {
  number: number;
  result?: number;
  isNegative: boolean;
  isFractional: boolean;
}
