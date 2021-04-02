import React, { useState } from 'react';
import { Input, Container, Button, Alert } from 'components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import paths from 'constants/paths';
import { useUserContext } from 'context';
import { createRequiredObject, createRestrictedLengthObject, emailValidation } from 'utils';
import { StyledWrapper } from 'views/LoginPage/LoginPage.css';
import { registerUser, RegisterFormInputs } from './RegisterPage.api';

const RegisterPage = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useUserContext();

  const { register, handleSubmit, errors } = useForm<RegisterFormInputs>();
  const history = useHistory();

  const onSubmit = async (data: RegisterFormInputs) => {
    setLoading(true);
    try {
      const response = await registerUser(data);
      setLoading(false);
      user.login(response.token);
      history.push(paths.CALENDAR);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <Container>
      <StyledWrapper as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Create new account</h2>
        <Input
          name="login"
          label="Login"
          id="login"
          refVal={register(createRestrictedLengthObject('login'))}
          minLength={6}
          maxLength={30}
          error={errors.login}
          data-testid="login"
        />
        <Input
          name="email"
          label="Email"
          id="email"
          type="email"
          refVal={register({ ...createRequiredObject('email'), ...emailValidation })}
          error={errors.email}
          data-testid="email"
        />
        <Input
          name="password"
          label="Password"
          id="password"
          type="password"
          refVal={register(createRestrictedLengthObject('password'))}
          autoComplete="on"
          minLength={6}
          maxLength={30}
          error={errors.password}
          data-testid="password"
        />
        <Input
          name="passwordRepeat"
          label="Repeat password"
          id="passwordRepeat"
          type="password"
          refVal={register(createRestrictedLengthObject('repeat password'))}
          autoComplete="on"
          minLength={6}
          maxLength={30}
          error={errors.passwordRepeat}
          data-testid="passwordRepeat"
        />
        <Alert error={error} loading={loading} />
        <Button size="m" type="submit" data-testid="submit">
          Create account
        </Button>
      </StyledWrapper>
    </Container>
  );
};

export default RegisterPage;
