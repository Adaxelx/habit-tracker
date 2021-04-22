import React, { useState } from 'react';
import { Input, Container, Button, Alert } from 'components';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import paths from 'constants/paths';
import { useUserContext } from 'context';
import { createRestrictedLengthObject } from 'utils';
import { StyledWrapper } from './LoginPage.css';
import { loginUser, LoginInputs } from './LoginPage.api';

const LoginPage = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useUserContext();

  const { register, handleSubmit, errors } = useForm<LoginInputs>();
  const history = useHistory();

  const onSubmit = async (data: LoginInputs) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      setLoading(false);
      user.login(response.token);
      history.push(paths.CALENDAR);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return user.token ? (
    <Redirect to={paths.CALENDAR} />
  ) : (
    <Container>
      <StyledWrapper as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <Alert error={error} loading={loading} />
        <Button size="m" type="submit" data-testid="submit">
          Log in
        </Button>
      </StyledWrapper>
    </Container>
  );
};

export default LoginPage;
