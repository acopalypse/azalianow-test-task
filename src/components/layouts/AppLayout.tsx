import React from 'react';
import Head from 'next/head';

import { Props } from '@/types/props.type';

import s from './AppLayout.module.css';

interface AppLayoutProps extends Props {
  meta?: {
    title?: string;
    description?: string;
  };
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta?.title || 'azalianow test task'}</title>
        <meta name='description' content={meta?.description || ''} />
      </Head>

      <main className={s.main}>{children}</main>
    </>
  );
};

export default AppLayout;
