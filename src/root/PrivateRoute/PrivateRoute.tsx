import React from 'react';
import { useUserContext } from 'context';
import { Redirect, Route } from 'react-router-dom';
import paths from 'constants/paths';

type PrivateRouteProps = {
  path: string;
  children: any;
};

const PrivateRoute = ({ ...rest }: PrivateRouteProps) => {
  const { token } = useUserContext();
  return token ? <Route {...rest} /> : <Redirect to={paths.LOGIN} />;
};

export default PrivateRoute;
