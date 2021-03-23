import styled from 'styled-components';

const StyledContainer = styled.main`
  margin-top: ${({ theme }) => `calc(${theme.sizes.nav} + ${theme.margin.sm})`};
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.nav} - ${theme.margin.sm})`};
  width: 100%;
`;

export default StyledContainer;
