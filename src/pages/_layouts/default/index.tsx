import React, { ReactChild } from 'react';

import { Wrapper } from './styles';

interface IProps {
  children: ReactChild;
}

export default function DefaultLayout({ children }: IProps) {
  return <Wrapper>{children}</Wrapper>;
}
