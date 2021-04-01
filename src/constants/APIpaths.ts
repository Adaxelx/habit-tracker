const APIurl = process.env.REACT_APP_BACKEND;

const DASHBOARD = `${APIurl}/`;
const CALENDAR = `${DASHBOARD}calendar/`;

const APIpaths = {
  LOGIN: `${DASHBOARD}login/`,
  LOGOUT: `${DASHBOARD}logout/`,
  CALENDAR,
  LABEL: `${CALENDAR}label/`,
  EVENT: `${CALENDAR}event/`,
};

export default APIpaths;
