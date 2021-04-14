import styled from 'styled-components';

const sizeDef = '50px';

export const StyledTile = styled.div`
  width: ${sizeDef};
  height: ${sizeDef};
  border: 1px solid black;
  position: relative;
`;

type CirlcleProps = {
  size: number;
  color: string;
};

export const StyledCircle = styled.div<CirlcleProps>`
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ color }) => color};
`;
