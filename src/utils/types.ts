import { MouseEventHandler } from 'react';

export type GridProps = {
  events: Event[];
  month: number;
  year: number;
  moveDate: Function;
  handleDayChange: Function;
};

export interface EventInterface {
  daysOfWeek: number[];
  title: string;
  timeStart?: string;
  timeEnd?: string;
  dateStart: string;
  dateEnd: string;
  description?: string;
}

export interface EventSend extends EventInterface {
  label?: string;
}

export interface Event extends EventInterface {
  _id: string;
  userId: string;
  label?: Label;
  checked?: [
    {
      day: number;
      month: number;
      year: number;
      _id: string;
    },
  ];
}

export interface EventLoop extends Event {
  numericStart: number;
  numericEnd: number;
}

export type Label = {
  _id: string;
  title: string;
  color: string;
  userId: string;
};

export type CalendarTile = {
  day: number;
  events: EventLoop[];
  id: number;
};

export enum SIDES {
  LEFT = -1,
  RIGHT = 1,
}

export type Color = { color?: string; id?: string };

export type NavProps = {
  navId: string;
  header: string;
  moveDate: Function;
  backToCalendar?: MouseEventHandler<HTMLHeadingElement>;
};

export interface DayCardProps {
  events: Event[];
  header: string;
  active: boolean;
}

export type DateTuple = [number, number, number];

export type TokenType = string | undefined;

export enum AlertTypes {
  ERROR,
  SUCCESS,
}
