import React, { ReactChild } from 'react';

import { Header, Wrapper } from './styles';

interface IProps {
  children: ReactChild;
}

export default function AuthLayout({ children }: IProps) {
  console.log(children);
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
