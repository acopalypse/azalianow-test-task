import React from 'react';
import { GetServerSideProps } from 'next';
import Form from '@/components/blocks/Form/Form';
import List from '@/components/blocks/List/List';
import { MessageData, FetcherResult } from '@/types/fetcher.type';
import fetcher from '@/utils/fetcher';

export default function Messages({ data }: FetcherResult<MessageData[]>) {
  const onSubmit = async (e: React.SyntheticEvent) => {};

  return (
    <>
      <section style={{ width: '50%' }}>
        <List>
          {data.map((item, index) => (
            <div key={`${item.author}-${index}`}>
              <p>
                <span>Message</span> {item.message}
              </p>
              <p>
                <span>Author</span> {item.author}
              </p>
            </div>
          ))}
        </List>
      </section>
      <section style={{ width: '50%' }}>
        <Form onSubmit={onSubmit}>
          <input type={'text'} name='author' placeholder='author' required />
          <input type={'text'} name='text' placeholder='message' required />
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
