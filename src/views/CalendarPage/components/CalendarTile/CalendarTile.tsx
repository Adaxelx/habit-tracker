import React from 'react';
import { useThemeContext } from 'context';
import { StyledCircle, StyledTile, StyledDay } from './CalendarTile.css';

const generateCircles = (colors: Color[], edge: number) => {
  const size = (edge * (1.3 + (colors.length - 2) * 0.1)) / colors.length;
  const shift = (edge - size) / (colors.length - 1);
  let position = -shift;
  return colors.map((color) => {
    if (color) {
      position += shift;
      return (
        <StyledCircle
          key={color.id}
          position={position}
          alone={colors.length === 1}
          color={color.color}
          size={size}
        />
      );
    }
    return null;
  });
};

type Color = { color?: string; id?: number };

type TileProps = {
  colors?: Color[];
  day: number;
};

const CalendarTile = ({ colors, day }: TileProps) => {
  const {
    gridTile: { size },
  } = useThemeContext();

  return (
    <StyledTile>
      {day === -1 ? null : (
        <>
          {colors && generateCircles(colors, size)}
          <StyledDay>{day}</StyledDay>
        </>
      )}
    </StyledTile>
  );
};

export default CalendarTile;
