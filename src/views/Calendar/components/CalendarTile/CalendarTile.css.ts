import styled from 'styled-components';

export const StyledTile = styled.div`
  width: ${({ theme }) => `${theme.gridTile.size}px`};
  height: ${({ theme }) => `${theme.gridTile.size}px`};

  position: relative;
  margin-top: 20%;
  overflow: hidden;
`;

type CirlcleProps = {
  size: number;
  alone: boolean;
  position: number;
  color: string;
};

export const StyledCircle = styled.div<CirlcleProps>`
  position: absolute;
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
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
  z-index: ${({ theme }) => theme.zIndex.medium};
`;
