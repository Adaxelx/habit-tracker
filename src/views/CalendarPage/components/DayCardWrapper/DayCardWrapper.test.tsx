import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import DayCardWrapper from './DayCardWrapper';

describe('DayCardWrapper', () => {
  let util: TestUtil;
  let props = { from: [2021, 5, 4], to: [2021, 5, 10], token: 'abd' };
  beforeEach(() => {
    jest.clearAllMocks();
    util = new TestUtil(<DayCardWrapper {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
