import styled from 'styled-components';
import { AlertTypes } from 'constants/enums';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type AlertProps = { type: AlertTypes };

const StyledAlert = styled.div<AlertProps>`
  border: ${({ type, theme }) => `1px solid ${theme.colors[type].border}`};
  background-color: ${({ type, theme }) => `${theme.colors[type].main}`};
  color: ${({ type, theme }) => `${theme.colors[type].text}`};
  border-radius: 5px;
  padding: ${({ theme }) => theme.margin.xs};
  font-size: ${({ theme }) => theme.font.sizes.s};
  margin-bottom: ${({ theme }) => theme.margin.sm};
`;

export { StyledAlert, StyledWrapper };
