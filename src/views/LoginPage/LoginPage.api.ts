import APIpaths from 'constants/APIpaths';

export type LoginInputs = {
  login: string;
  password: string;
  [key: string]: string;
};

export const loginUser = async (data: LoginInputs) => {
  const response = await fetch(APIpaths.LOGIN, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    return response.json();
  }
  const { message } = await response.json();
  throw new Error(message || 'Something went wrong');
};
