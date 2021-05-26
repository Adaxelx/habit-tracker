import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import LabelForm from './LabelForm';

describe('LabelForm', () => {
  let util: TestUtil;
  let props;
  beforeEach(() => {
    jest.clearAllMocks();
    util = new TestUtil(<LabelForm {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
