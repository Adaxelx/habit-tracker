import React from 'react';
import { Input, Container, Button } from 'components';
import { StyledWrapper } from './LoginPage.css';

const LoginPage = () => (
  <Container>
    <StyledWrapper>
      <Input label="Login" id="login" />
      <Input label="Password" id="password" />
      <Button size="m">Log in</Button>
    </StyledWrapper>
  </Container>
);

export default LoginPage;
