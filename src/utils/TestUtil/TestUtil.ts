import { ReactElement } from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { RenderWithRouter } from '../';
// https://medium.com/@tsubasakondo_36683/how-to-write-automation-testing-with-react-3a4f546668f1

export default class TestUtil {
  public render: RenderResult;

  constructor(component: ReactElement) {
    this.render = RenderWithRouter(component);
  }

  setValue(testId: string, value: string | number) {
    const elem = this.render.getByTestId(testId);
    fireEvent.change(elem, { target: { value } });
  }

  click(testId: string) {
    const elem = this.render.getByTestId(testId);
    fireEvent.click(elem);
  }

  getAll(testId: string) {
    return this.render.getAllByTestId(testId);
  }

  get(testId: string) {
    return this.render.getByTestId(testId);
  }
}
