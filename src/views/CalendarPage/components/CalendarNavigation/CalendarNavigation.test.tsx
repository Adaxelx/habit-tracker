import React from 'react';
import 'jest-styled-components';
import { TestUtil, NavProps } from 'utils';
import CalendarNavigation from './CalendarNavigation';

describe('CalendarNavigation', () => {
  let util: TestUtil;

  let props: NavProps;

  beforeEach(() => {
    jest.clearAllMocks();

    props = {
      header: 'April 2021',
      moveDate: jest.fn(),
    };
    util = new TestUtil(<CalendarNavigation {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
