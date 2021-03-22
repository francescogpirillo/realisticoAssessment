import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './Pagination';

configure({adapter: new Adapter()});

describe('<Pagination />', () => {
    let wrapper;
    beforeEach(()=>{
         wrapper = shallow(<Pagination/>);
    })
    
    it('should render six buttons', () => {
        wrapper.setProps({
            totalUsers:20,
            usersPerPage:4,
            currentPage:1
        })
        expect(wrapper.find('button')).toHaveLength(6);
    });

    it('should render four buttons', () => {
        wrapper.setProps({
            totalUsers:10,
            usersPerPage:4,
            currentPage:3
        })
        expect(wrapper.find('button')).toHaveLength(4);
    });

    it('should render five buttons', () => {
        wrapper.setProps({
            totalUsers:10,
            usersPerPage:4,
            currentPage:2
        })
        expect(wrapper.find('button')).toHaveLength(5);
    });
});