import styled from 'styled-components';

export const StyledBacground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.max};
  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledWrapper = styled.div`
  width: ${({ theme }) => `calc(100% - ${theme.margin.sm} - ${theme.margin.sm})`};
  height: ${({ theme }) => `calc(100vh - ${theme.margin.sm} -  ${theme.margin.sm})`};
  top: ${({ theme }) => theme.margin.sm};
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  z-index: ${({ theme }) => theme.zIndex.max};
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;

export const StyledHeader = styled.h2`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.ml};
`;

export const StyledCloseButton = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  align-self: flex-end;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

interface Line {
  rotate: number;
}

export const StyledLine = styled.div<Line>`
  height: 100%;
  width: 2px;
  position: absolute;
  top: 0%;
  left: 50%;
  background-color: ${({ theme }) => theme.colors.error.main};
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
`;
