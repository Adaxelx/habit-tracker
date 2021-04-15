const APIurl = process.env.REACT_APP_BACKEND;

const DASHBOARD = `${APIurl}/`;
const USER = `${APIurl}/users/`;
const EVENTS = `${DASHBOARD}events/`;
const LABELS = `${DASHBOARD}labels/`;

const APIpaths = {
  LOGIN: `${USER}login/`,
  REGISTER: `${USER}register/`,
  LOGOUT: `${USER}logout/`,
  EVENTS,
  LABELS,
};

export default APIpaths;
