import styled from 'styled-components';

export const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
  @media (min-width: ${({ theme }) => theme.media.tablet.s}) {
    justify-content: flex-start;
    padding-top: 0;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
