import { ReactFragment, ReactNode, ReactPortal } from 'react';

type children = ReactNode | ReactFragment | ReactPortal | boolean | null | undefined;

export interface Props {
  children?: children;
}
