import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from './UserList';
import UserItem from '../UserItem/UserItem'

configure({adapter: new Adapter()});

describe('<UserList />', () => {
    let wrapper;
    beforeEach(()=>{
         wrapper = shallow(<UserList/>);
    })

    it('should render one input', () => {
        wrapper.setProps({
            userList:[{
                id: 1,
                name:'Paolo Rossi',
                email:'test@gmail.com',
                address:{
                    street: 'Kulas Light',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496'
                    }
                },
                phone:'00000-000',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                }
            },
            {
                id: 2,
                name:'Mario Bianchi',
                email:'test@gmail.com',
                address:{
                    street: 'Kulas Light',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496'
                    }
                },
                phone:'00000-000',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                }
            }]});

        expect(wrapper.find(UserItem)).toHaveLength(2);
    });
});