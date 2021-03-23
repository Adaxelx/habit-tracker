import styled from 'styled-components';

const StyledContainer = styled.main`
  margin-top: ${({ theme }) => `calc(${theme.sizes.nav} + 1rem)`};
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.nav} - 1rem)`};
  width: 100%;
`;

export default StyledContainer;
