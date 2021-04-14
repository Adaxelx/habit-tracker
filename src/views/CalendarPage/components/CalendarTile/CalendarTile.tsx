import React from 'react';
import { useThemeContext } from 'context';
import { StyledCircle, StyledTile, StyledDay } from './CalendarTile.css';

const generateCircles = (colors: string[], edge: number) => {
  const size = (edge * (1.3 + (colors.length - 2) * 0.1)) / colors.length;
  const shift = (edge - size) / (colors.length - 1);
  let position = -shift;
  return colors.map((color) => {
    position += shift;
    return (
      <StyledCircle
        key={color}
        position={position}
        alone={colors.length === 1}
        color={color}
        size={size}
      />
    );
  });
};

type TileProps = {
  colors: string[];
  day: number;
};

const CalendarTile = ({ colors, day }: TileProps) => {
  const {
    gridTile: { size },
  } = useThemeContext();

  return (
    <StyledTile>
      {generateCircles(colors, size)}
      <StyledDay>{day}</StyledDay>
    </StyledTile>
  );
};

export default CalendarTile;
