import { FetcherOptions, FetcherResult } from '@/types/fetcher.type';

const fetcher = async <TYPE>(options: FetcherOptions): Promise<TYPE> => {
  const body = (options.variables && JSON.stringify(options.variables)) || undefined;
  const res = await fetch(
    (process.env.NEXT_PUBLIC_API_URL || '') + options.endpoint,
    {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    },
  );

  const { data }: FetcherResult<TYPE> = await res.json();

  return data;
};

export default fetcher;
