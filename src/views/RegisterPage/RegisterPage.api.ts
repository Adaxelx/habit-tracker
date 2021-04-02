import APIpaths from 'constants/APIpaths';

export interface RegisterInputs {
  login: string;
  password: string;
  email: string;
}

export interface RegisterFormInputs extends RegisterInputs {
  passwordRepeat: string;
}

export const registerUser = async (data: RegisterInputs) => {
  const response = await fetch(APIpaths.REGISTER, { method: 'POST', body: JSON.stringify(data) });
  if (response.status === 200) {
    return response.json();
  }
  throw new Error('Something went wrong.');
};
