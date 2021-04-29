import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'constants/routes';
import PrivateRoute from 'root/PrivateRoute';

const Router = () => (
  <Switch>
    {routes.map(({ path, Component, isPrivate }) =>
      !isPrivate ? (
        <Route path={path} exact key={path}>
          <Component />
        </Route>
      ) : (
        <PrivateRoute path={path} key={path}>
          <Component />
        </PrivateRoute>
      ),
    )}
  </Switch>
);

export default Router;
