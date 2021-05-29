import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import Label from './Label';

describe('Label', () => {

 let util: TestUtil;
let props;
 beforeEach(() => {
 jest.clearAllMocks();
 util = new TestUtil(<Label {...props} />);
 });

 it('should match snapshot', () => {
 expect(util.render.asFragment()).toMatchSnapshot();
 });
 });
