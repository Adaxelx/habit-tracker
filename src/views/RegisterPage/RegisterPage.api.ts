import APIpaths from 'constants/APIpaths';

export interface RegisterInputs {
  login: string;
  password: string;
  email: string;
}

export interface RegisterFormInputs extends RegisterInputs {
  passwordRepeat: string;
  [key: string]: string;
}

export const registerUser = async (data: RegisterInputs) => {
  const response = await fetch(APIpaths.REGISTER, {
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
