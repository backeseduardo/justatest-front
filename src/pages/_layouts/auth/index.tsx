import React, { ReactChild } from 'react';

import { Header, Wrapper } from './styles';

interface IProps {
  children: ReactChild;
}

export default function AuthLayout({ children }: IProps) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
