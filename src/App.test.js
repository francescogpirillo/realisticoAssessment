import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Users from './containers/Users/Users';

configure({adapter: new Adapter()});

describe('<App />', () => {
    let wrapper;
    beforeEach(()=>{
         wrapper = shallow(<App/>);
    })
    
    it('should render one Users component', () => {      
        expect(wrapper.find(Users)).toHaveLength(1);
    });

    it('should render one h1', () => {      
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});