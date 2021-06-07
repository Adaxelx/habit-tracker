import { MouseEventHandler } from 'react';

export type GridProps = {
  days: CalendarTile[];
  month: number;
  year: number;
  moveDate: Function;
  handleDayChange: Function;
};

export interface EventInterface {
  daysOfWeek: number[];
  title: string;
  timeStart: string;
  timeEnd: string;
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

export interface LabelSend {
  title: string;
  color: string;
}

export interface Label extends LabelSend {
  _id: string;
  userId: string;
}

export type CalendarTile = {
  day: number;
  events: Event[];
  id: number;
  active?: boolean;
  date?: Date;
};

export enum SIDES {
  LEFT = -1,
  RIGHT = 1,
}

export type NavProps = {
  navId: string;
  header: string;
  moveDate: Function;
  backToCalendar?: MouseEventHandler<HTMLHeadingElement>;
};

export type DateTuple = [number, number, number];

export interface DayCardProps {
  events: Event[];
  header: string;
  active: boolean;
  labels: Label[];
  date: DateTuple;
}

export type TokenType = string | undefined;

export enum AlertTypes {
  ERROR,
  SUCCESS,
}

export interface FormProps {
  open: boolean;
  handleClose: any;
}

export interface FormWithLabels extends FormProps {
  labels: Label[];
}

export interface FormHabbit extends FormWithLabels {
  event?: Event;
}

export interface FormLabel extends FormProps {
  label?: Label;
}
export interface HabbitProps {
  habbit: Event;
  labels: Label[];
  checked: boolean;
  day: DateTuple;
}

export interface GridViewProps {
  days: CalendarTile[];
  actualMonth: number;
  moveDate: Function;
  actualYear: number;
  handleChangeView: Function;
  labels: Label[];
}
