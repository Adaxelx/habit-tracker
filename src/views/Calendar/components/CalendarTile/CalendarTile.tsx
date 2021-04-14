import React from 'react';
import { StyledCircle, StyledTile } from './CalendarTile.css';

const generateCircles = (colors: string[]) => {
  const size = (50 * 1.3) / colors.length;
  return colors.map((color) => <StyledCircle key={color} color={color} size={size} />);
};

type TileProps = {
  colors: string[];
};

const CalendarTile = ({ colors }: TileProps) => <StyledTile>{generateCircles(colors)}</StyledTile>;

export default CalendarTile;
