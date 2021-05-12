import styled from 'styled-components';

export const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  @media (min-width: ${({ theme }) => theme.media.tablet.s}) {
    justify-content: flex-start;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
