import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

interface IProps {
  component: any;
  isPrivate?: boolean;
  [key: string]: any;
}

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}: IProps) {
  const signed: boolean = useSelector((store: any) => store.auth.loggedIn);

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
