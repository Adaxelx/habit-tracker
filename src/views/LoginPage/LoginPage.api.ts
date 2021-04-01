import APIpaths from 'constants/APIpaths';

export type LoginInputs = {
  login: string;
  password: string;
};

export const loginUser = async (data: LoginInputs) => {
  const response = await fetch(APIpaths.LOGIN, { method: 'POST', body: JSON.stringify(data) });
  if (response.status === 200) {
    return response.json();
  }
  throw new Error('Something went wrong.');
};
