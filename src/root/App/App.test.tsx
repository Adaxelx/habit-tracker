import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import App from './App';

describe('App', () => {
  let util: TestUtil;
  beforeEach(() => {
    util = new TestUtil(<App />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
