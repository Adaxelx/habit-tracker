import styled, { keyframes, css } from 'styled-components';
import { AlertTypes } from 'utils';

const { ERROR, SUCCESS } = AlertTypes;

const alertAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  12% {
    opacity: 1;
    transform: translateY(0%);
  }
  88% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%);
  }
`;

const conAnimation = keyframes`
  0% {
    transform: translateX(-50%) scale(0);
  }
  1% {
    transform: translateX(-50%) scale(1);
  }
  99% {
    transform: translateX(-50%) scale(1);
  }
  100% {
    transform: translateX(-50%) scale(0);
  }
`;

interface AlertProps {
  type: AlertTypes;
}

const error = css`
  background-color: ${({ theme }) => theme.colors.error.main};
  color: ${({ theme }) => theme.colors.error.text};
  border: 1px solid ${({ theme }) => theme.colors.error.border};
`;
const success = css`
  background-color: ${({ theme }) => theme.colors.success.main};
  color: ${({ theme }) => theme.colors.success.text};
  border: 1px solid ${({ theme }) => theme.colors.success.border};
`;

export const StyledAlert = styled.div<AlertProps>`
  transition: 0.15s linear;
  opacity: 1;
  animation: ${alertAnimation} 6s forwards;
  width: 100%;
  max-width: 300px;
  padding: ${({ theme }) => theme.margin.s};
  text-align: justify;
  ${({ type }) => {
    switch (type) {
      case ERROR:
        return error;
      case SUCCESS:
        return success;
      default:
        return error;
    }
  }};
`;

export const StyledScale = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  z-index: 1100;
  padding: 0 0.5rem;
  transform: translateX(-50%);
  animation: ${conAnimation} 6s forwards;
`;
