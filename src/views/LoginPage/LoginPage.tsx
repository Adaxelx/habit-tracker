import React, { useState } from 'react';
import { Input, Container, Button } from 'components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import paths from 'constants/paths';
import { StyledWrapper } from './LoginPage.css';
import { loginUser, LoginInputs } from './LoginPage.api';

const createRegisterObject = (name: string) => ({
  required: `Field ${name} is required.`,
  minLength: {
    value: 6,
    message: `Field ${name} must have at least 6 characters.`,
  },
  maxLength: {
    value: 30,
    message: `Field ${name} must have maximum 30 characters.`,
  },
});

const LoginPage = () => {
  const [error, setError] = useState(false);

  const { register, handleSubmit, errors } = useForm<LoginInputs>();
  const history = useHistory();

  const onSubmit = async (data: LoginInputs) => {
    try {
      await loginUser(data);
      history.push(paths.CALENDAR);
    } catch (err) {
      setError(err.message);
    }
  };

  const message = error || null;

  return (
    <Container>
      <StyledWrapper as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name="login"
          label="Login"
          id="login"
          refVal={register(createRegisterObject('login'))}
          minLength={6}
          maxLength={30}
          error={errors.login}
        />
        <Input
          name="password"
          label="Password"
          id="password"
          type="password"
          refVal={register(createRegisterObject('password'))}
          autoComplete="on"
          minLength={6}
          maxLength={30}
          error={errors.password}
        />
        {message}
        <Button size="m" type="submit">
          Log in
        </Button>
      </StyledWrapper>
    </Container>
  );
};

export default LoginPage;
