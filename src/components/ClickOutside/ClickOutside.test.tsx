import React from 'react';
import 'jest-styled-components';
import { fireEvent } from '@testing-library/react';
import { TestUtil } from 'utils';
import ClickOutside from './ClickOutside';

describe('ClickOutside', () => {
  let util: TestUtil;
  let props;
  let mockedClose;
  beforeEach(() => {
    jest.clearAllMocks();
    mockedClose = jest.fn();

    util = new TestUtil(
      (
        <div>
          <div data-testid="somethingOutside" />
          <ClickOutside {...props} onOutsideClick={mockedClose}>
            <div />
          </ClickOutside>
        </div>
      ),
    );
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  // TODO: not working
  it('should not run onOutsideClick when wrapper is clicked', () => {
    fireEvent.click(document.body);

    expect(mockedClose).not.toHaveBeenCalled();
  });
});
