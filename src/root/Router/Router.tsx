import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from 'constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route path={path} exact key={path}>
          <Component />
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
