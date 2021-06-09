import styled from 'styled-components';

interface DeleteModalProps {
  open: boolean;
}

export const StyledDeleteModal = styled.div<DeleteModalProps>`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  padding: ${({ theme }) => theme.margin.s};
  background-color: white;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  text-align: justify;
  border: 2px solid ${({ theme }) => theme.colors.border};
  z-index: 9998;
`;

interface ButtonProps {
  isDelete?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme, isDelete }) =>
    isDelete ? theme.colors.error.main : theme.colors.success.main};
  padding: ${({ theme }) => theme.margin.xs};
  margin-right: ${({ theme }) => theme.margin.xs};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.margin.xs};
`;
