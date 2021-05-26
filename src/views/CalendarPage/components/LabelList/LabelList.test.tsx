import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import LabelList from './LabelList';

describe('LabelList', () => {
  let util: TestUtil;
  let props;
  beforeEach(() => {
    jest.clearAllMocks();
    util = new TestUtil(<LabelList {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
