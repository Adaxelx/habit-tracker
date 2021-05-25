import styled from 'styled-components';

type InputProps = {
  error: boolean;
};

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.margin.sm};
  width: 100%;
  max-width: 300px;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.font.sizes.m};
  margin-bottom: ${({ theme }) => theme.margin.s};
`;

export const StyledInput = styled.input<InputProps>`
  font-size: ${({ theme }) => theme.font.sizes.sm};
  width: 100%;
  max-width: 300px;
  border: ${({ error, theme }) => error && `1px solid ${theme.colors.error.main}`};
  &:focus {
    outline: thin dotted;
  }
`;

export const StyledTextArea = styled.textarea<InputProps>`
  font-size: ${({ theme }) => theme.font.sizes.sm};
  width: 100%;
  max-width: 300px;
  border: ${({ error, theme }) => error && `1px solid ${theme.colors.error.main}`};
  &:focus {
    outline: thin dotted;
  }
`;

export const StyledMessage = styled.p`
  margin-top: ${({ theme }) => theme.margin.xs};
  color: ${({ theme }) => theme.colors.error.main};
  text-align: justify;
`;
