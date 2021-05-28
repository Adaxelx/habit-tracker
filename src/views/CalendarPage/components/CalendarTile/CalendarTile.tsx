import React, { MouseEventHandler } from 'react';
import { useThemeContext } from 'context';
import { Color } from 'utils';
import { useWindowSize } from 'hooks';
import { StyledCircle, StyledTile, StyledDay } from './CalendarTile.css';

const generateCircles = (colors: Color[], edge: number) => {
  const size = (edge * (1.3 + (colors.length - 2) * 0.1)) / colors.length;
  const shift = (edge - size) / (colors.length - 1);
  let position = -shift;
  return colors.map((color) => {
    position += shift;
    let colorVal = color;
    if (Object.keys(colorVal).length === 0) {
      colorVal = { color: '#dbdbdb', id: 'empty_color' };
    }
    return (
      <StyledCircle
        key={color.id}
        position={position}
        alone={colors.length === 1}
        color={colorVal.color}
        size={size}
      />
    );
  });
};

type TileProps = {
  colors?: Color[];
  day: number;
  handleDayChange: Function;
};

const CalendarTile = ({ colors, day, handleDayChange }: TileProps) => {
  const {
    gridTile: { size },
  } = useThemeContext();
  const [width] = useWindowSize();

  return (
    <StyledTile onClick={handleDayChange as MouseEventHandler<HTMLButtonElement>}>
      {day === -1 ? null : (
        <>
          {colors && generateCircles(colors, width > 768 ? size * 2 : size)}
          <StyledDay data-testid="day">{day}</StyledDay>
        </>
      )}
    </StyledTile>
  );
};

export default CalendarTile;
