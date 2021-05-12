import styled from 'styled-components';

export const StyledTile = styled.div`
  width: ${({ theme }) => `${theme.gridTile.size}px`};
  height: ${({ theme }) => `${theme.gridTile.size}px`};
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.common.white};
  @media (min-width: ${({ theme }) => theme.media.tablet.s}) {
    width: ${({ theme }) => `${theme.gridTile.size * 2}px`};
    height: ${({ theme }) => `${theme.gridTile.size * 2}px`};
  }
  &:hover {
    cursor: pointer;
  }
`;

type CirlcleProps = {
  size: number;
  alone: boolean;
  position: number;
  color: string | undefined;
};

export const StyledCircle = styled.div<CirlcleProps>`
  position: absolute;
  border-radius: 50%;
  width: ${({ size, alone }) => (alone ? `${size / 1.3}px` : `${size}px`)};
  height: ${({ size, alone }) => (alone ? `${size / 1.3}px` : `${size}px`)};
  background-color: ${({ color }) => color};
  top: ${({ position }) => `${position}px`};
  left: ${({ position }) => `${position}px`};
  ${({ alone }) => alone && 'transform: translate(-50%,-50%);top: 50%;left:50%'}
`;

export const StyledDay = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.low};
`;
