import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'constants/routes';

const Router = () => (
  <Switch>
    {routes.map(({ path, Component }) => (
      <Route path={path} exact key={path}>
        <Component />
      </Route>
    ))}
  </Switch>
);

export default Router;
