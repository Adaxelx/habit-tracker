import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import PopUp from './PopUp';

describe('PopUp', () => {
  let util: TestUtil;
  let props;
  beforeEach(() => {
    jest.clearAllMocks();
    util = new TestUtil(<PopUp {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
