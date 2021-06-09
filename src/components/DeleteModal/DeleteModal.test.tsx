import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import DeleteModal from './DeleteModal';

describe('DeleteModal', () => {
  let util: TestUtil;
  let props;
  beforeEach(() => {
    jest.clearAllMocks();
    props = { open: true, handleClose: jest.fn(), handleOpen: jest.fn() };
    util = new TestUtil(<DeleteModal {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
