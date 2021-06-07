import React, { createContext, useContext, useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface UserProviderProps {
  token: string | undefined;
  login: Function;
  logout: Function;
}

export const UserContext = createContext<UserProviderProps>({
  token: undefined,
  login: () => {},
  logout: () => {},
});

const { Provider } = UserContext;

type UserProps = {
  children: Object;
};

const setCookieDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 14);
  return date;
};

const UserProvider = ({ children }: UserProps) => {
  const [token, setToken] = useState<string | undefined>(cookies.get('token'));
  const user: UserProviderProps = {
    token,
    login: (newToken: string) => {
      cookies.set('token', newToken, {
        path: '/',
        expires: setCookieDate(),
      });
      setToken(newToken);
    },
    logout: () => {
      cookies.remove('token', { path: '/' });
      setToken(undefined);
    },
  };
  return <Provider value={user}>{children}</Provider>;
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
