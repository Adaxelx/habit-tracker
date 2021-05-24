import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: ${({ theme }) => `calc(100% - ${theme.margin.l})`};
  height: ${({ theme }) => `calc(100vh - ${theme.margin.l})`};
  position: fixed;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  z-index: ${({ theme }) => theme.zIndex.max};
  display: flex;
  flex-direction: column;
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
