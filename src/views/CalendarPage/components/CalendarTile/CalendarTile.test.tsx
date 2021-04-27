import React from 'react';
import 'jest-styled-components';
import { TestUtil, Color } from 'utils';
import CalendarTile from './CalendarTile';

describe('CalendarTile', () => {
  let util: TestUtil;

  let props: { colors: Color[]; day: number };

  beforeEach(() => {
    jest.clearAllMocks();

    props = {
      colors: [{ color: '#fff', id: 1 }],
      day: 1,
    };
    util = new TestUtil(<CalendarTile {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.get('day').textContent).toEqual('1');
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('it should render empty tile when day is -1', () => {
    props = {
      colors: [],
      day: -1,
    };
    util = new TestUtil(<CalendarTile {...props} />);
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('it change styles when two colors appear', () => {
    props = {
      colors: [
        { color: '#fff', id: 1 },
        { color: '#ddd', id: 2 },
      ],
      day: 1,
    };
    util = new TestUtil(<CalendarTile {...props} />);
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
