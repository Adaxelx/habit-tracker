import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'components';
import paths from 'constants/paths';
import {
  StyledHeader,
  StyledWrapper,
  FlexColCenter,
  StyledDescription,
  StyledSeparator,
  StyledContentWrapper,
} from './Dashboard.css';

const Dashboard = () => (
  <Container>
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledHeader>Habbit tracker</StyledHeader>
        <StyledDescription>
          Track your progress in very simple and personalized app
        </StyledDescription>
      </StyledContentWrapper>
      <FlexColCenter>
        <Button as={Link} to={paths.REGISTER} size="m">
          Create account for free
        </Button>
        <StyledSeparator>or</StyledSeparator>
        <Button as={Link} to={paths.LOGIN} size="m">
          Log in
        </Button>
      </FlexColCenter>
    </StyledWrapper>
  </Container>
);

export default Dashboard;
