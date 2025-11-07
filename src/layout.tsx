import { PropsWithChildren } from 'react';
import Cursor from './components/Cursor';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Cursor />
    </>
  );
}

