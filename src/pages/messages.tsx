import React from 'react';
import { GetServerSideProps } from 'next';

export default function Messages() {
  return <div>messages</div>;
}

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  return {
    props: {},
  };
};
