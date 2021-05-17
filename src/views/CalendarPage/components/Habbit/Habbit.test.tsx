import React from 'react';
import 'jest-styled-components';
import { TestUtil, Event } from 'utils';
import Habbit from './Habbit';

describe('Habbit', () => {
  let util: TestUtil;

  let props: Event;

  beforeEach(() => {
    jest.clearAllMocks();

    props = {
      habbit: {
        _id: 'xd',
        daysOfWeek: [0, 2, 3],
        title: 'Title',
        timeStart: '12:00',
        timeEnd: '24:00',
        dateStart: '2021-04-20',
        dateEnd: '2021-05-20',
        description: 'test',
        userId: 'test',
      },
    };
    util = new TestUtil(<Habbit {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
