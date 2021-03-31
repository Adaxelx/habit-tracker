import React from 'react';
import { TestUtil } from 'utils';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  let util: TestUtil;
  beforeEach(() => {
    util = new TestUtil(<Dashboard />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
