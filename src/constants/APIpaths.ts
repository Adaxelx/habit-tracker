const APIurl = process.env.REACT_APP_BACKEND;

const DASHBOARD = `${APIurl}/`;
const USER = `${APIurl}/users/`;
const CALENDAR = `${DASHBOARD}calendar/`;

const APIpaths = {
  LOGIN: `${USER}login/`,
  REGISTER: `${USER}register/`,
  LOGOUT: `${USER}logout/`,
  CALENDAR,
  LABEL: `${CALENDAR}label/`,
  EVENT: `${CALENDAR}event/`,
};

export default APIpaths;
