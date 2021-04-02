import React from 'react';
import { TestUtil } from 'utils';
import Alert from './Alert';
import 'jest-styled-components';

describe('Alert', () => {
  let util: TestUtil;
  let props: { error: string; loading: boolean };

  beforeEach(() => {
    props = { error: '', loading: false };
  });

  it('should match snapshot - null', () => {
    util = new TestUtil(<Alert {...props} />);
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot - error', () => {
    props.error = 'błąd';
    util = new TestUtil(<Alert {...props} />);
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot - loading', () => {
    props.loading = true;
    util = new TestUtil(<Alert {...props} />);
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
