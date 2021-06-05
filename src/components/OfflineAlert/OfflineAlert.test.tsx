import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import OfflineAlert from './OfflineAlert';

describe('OfflineAlert', () => {

 let util: TestUtil;
let props;
 beforeEach(() => {
 jest.clearAllMocks();
 util = new TestUtil(<OfflineAlert {...props} />);
 });

 it('should match snapshot', () => {
 expect(util.render.asFragment()).toMatchSnapshot();
 });
 });
