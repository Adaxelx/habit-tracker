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

interface WrapperProps {
  fullHeight?: boolean;
}

export const StyledWrapper = styled.div<WrapperProps>`
  position: fixed;
  width: ${({ theme, fullHeight }) =>
    fullHeight ? '100%' : `calc(100% - ${theme.margin.sm} - ${theme.margin.sm})`};
  height: ${({ theme }) => `calc(90vh - ${theme.margin.sm} -  ${theme.margin.sm})`};
  top: ${({ theme, fullHeight }) => (fullHeight ? '0' : theme.margin.sm)};
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme }) => theme.margin.sm} 0;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: ${({ theme }) => theme.zIndex.max};
  max-width: 350px;
  overflow: scroll;
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
  display: block;
  margin-left: auto;
  margin-right: 0;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    filter: grayscale(1);
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
