import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import CalendarGridView from './CalendarGridView';

describe('CalendarGridView', () => {

 let util: TestUtil;
let props;
 beforeEach(() => {
 jest.clearAllMocks();
 util = new TestUtil(<CalendarGridView {...props} />);
 });

 it('should match snapshot', () => {
 expect(util.render.asFragment()).toMatchSnapshot();
 });
 });
