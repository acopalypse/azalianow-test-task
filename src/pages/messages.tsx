import React from 'react';
import { GetServerSideProps } from 'next';
import Form from '@/components/blocks/Form/Form';

export default function Messages() {
  const onSubmit = async (e: React.SyntheticEvent) => {};

  return (
    <>
      <section style={{ width: '50%' }}>MessagesList</section>
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

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  return {
    props: {},
  };
};
