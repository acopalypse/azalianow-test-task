import React from 'react';
import Link from 'next/link';

import s from './Navigation.module.css';

const Navigation = () => {
  const defaultLinks = [
    { id: 'dl-id-0', href: '/', name: 'Home' },
    { id: 'dl-id-1', href: '/messages', name: 'Messages' },
    { id: 'dl-id-2', href: '/averages', name: 'Averages' },
    { id: 'dl-id-3', href: '/', name: 'GitHub' },
  ];

  return (
    <nav className={s.wrapper}>
      {defaultLinks.map(({ id, href, name }) => (
        <Link key={id} href={href}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
