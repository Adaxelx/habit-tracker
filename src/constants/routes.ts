import { Dashboard, LoginPage, Calendar, RegisterPage } from 'views';
import paths from './paths';

const { DASHBOARD, CALENDAR, LOGIN, REGISTER } = paths;

interface Route {
  link: string;
  name: string;
}

interface Routes {
  CALENDAR: Route;
  DASHBOARD: Route;
  LOGIN: Route;
  REGISTER: Route;
  [key: string]: Route;
}

export const routes: Routes = {
  CALENDAR: { link: CALENDAR, name: 'Your tracker' },
  DASHBOARD: { link: DASHBOARD, name: 'Home page' },
  LOGIN: { link: LOGIN, name: 'Login' },
  REGISTER: { link: REGISTER, name: 'Register' },
};

const routesForRouter = [
  {
    path: DASHBOARD,
    Component: Dashboard,
    exact: true,
  },
  {
    path: CALENDAR,
    Component: Calendar,
  },
  { path: LOGIN, Component: LoginPage },
  { path: REGISTER, Component: RegisterPage },
];

export default routesForRouter;
