import { Dashboard, LoginPage, CalendarPage, RegisterPage } from 'views';
import paths from './paths';

const { DASHBOARD, CALENDAR, LOGIN, REGISTER } = paths;

interface Route {
  link: string;
  name: string;
}

export const routes: Array<Route> = [
  { link: DASHBOARD, name: 'Home page' },
  { link: CALENDAR, name: 'Your tracker' },
  { link: LOGIN, name: 'Login' },
  { link: REGISTER, name: 'Register' },
];

const routesForRouter = [
  {
    path: DASHBOARD,
    Component: Dashboard,
    exact: true,
  },
  {
    path: CALENDAR,
    Component: CalendarPage,
    isPrivate: true,
  },
  { path: LOGIN, Component: LoginPage },
  { path: REGISTER, Component: RegisterPage },
];

export default routesForRouter;
