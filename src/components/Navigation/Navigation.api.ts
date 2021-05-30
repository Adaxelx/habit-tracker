import APIpaths from 'constants/APIpaths';
import { TokenType } from 'utils';

export const logoutUser = async (token: TokenType) => {
  const response = await fetch(APIpaths.LOGOUT, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'POST',
  });
  if (response.status === 200) {
    return response.json();
  }
  const { message } = await response.json();
  throw new Error(message || 'Something went wrong');
};
