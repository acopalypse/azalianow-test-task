import React from 'react';
import { GetServerSideProps } from 'next';
import Form from '@/components/blocks/Form/Form';
import List from '@/components/blocks/List/List';
import { MessageData, FetcherResult } from '@/types/fetcher.type';
import fetcher from '@/utils/fetcher';

export default function Messages({ data }: FetcherResult<MessageData[]>) {
  const onSubmit = async (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      message: { value?: string };
      author: { value?: string };
    };
    const variables = {
      message: target.message?.value,
      author: target.author?.value,
    };

    try {
      await fetcher<MessageData[]>({
        endpoint: '/messages',
        method: 'POST',
        variables,
      });
    } catch (err) {
      console.log('Err at fetch', err);
    }
  };

  return (
    <>
      <section style={{ width: '50%' }}>
        <List>
          {data.map((item, index) => (
            <div key={`${item.author}-${index}`}>
              <p>
                <span>Message:</span> {item.message}
              </p>
              <p>
                <span>Author:</span> {item.author}
              </p>
            </div>
          ))}
        </List>
      </section>
      <section style={{ width: '50%' }}>
        <Form onSubmit={onSubmit}>
          <input type={'text'} name='author' placeholder='author' required />
          <input type={'text'} name='message' placeholder='message' required />
          <button type={'submit'}>разместить сообщение</button>
        </Form>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: MessageData[];
}> = async () => {
  try {
    const data = await fetcher<MessageData[]>({
      endpoint: '/messages',
      method: 'POST',
    });

    return { props: { data } };
  } catch (err) {
    return { props: { data: [] } };
  }
};
