import styled from 'styled-components';

export const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.margin.s};
  padding-top: 0;
`;

export const StyledButtonContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.margin.xs};
`;
