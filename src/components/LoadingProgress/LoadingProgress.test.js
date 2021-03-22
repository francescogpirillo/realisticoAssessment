import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadingProgress from './LoadingProgress';
import { CircularProgress } from '@material-ui/core';

configure({adapter: new Adapter()});

describe('<LoadingProgress />', () => {
    let wrapper;
    beforeEach(()=>{
         wrapper = shallow(<LoadingProgress/>);
    })
    
    it('should render one CircularProgress component', () => {
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });
});