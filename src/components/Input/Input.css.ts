import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.margin.sm};
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.font.sizes.m};
  margin-bottom: ${({ theme }) => theme.margin.s};
`;

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.font.sizes.sm};
`;
