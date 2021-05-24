import React from 'react';
import 'jest-styled-components';
import { TestUtil } from 'utils';
import HabbitForm from './HabbitForm';

describe('HabbitForm', () => {

 let util: TestUtil;
let props;
 beforeEach(() => {
 jest.clearAllMocks();
 util = new TestUtil(<HabbitForm {...props} />);
 });

 it('should match snapshot', () => {
 expect(util.render.asFragment()).toMatchSnapshot();
 });
 });
