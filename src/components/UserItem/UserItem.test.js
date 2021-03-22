import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserItem from './UserItem';

configure({adapter: new Adapter()});

describe('<UserItem />', () => {
    let wrapper;
    beforeEach(()=>{
         wrapper = shallow(<UserItem />);
    })

    it('should render four columns', () => {
        wrapper.setProps({
            name:'Paolo',
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
        });
        expect(wrapper.find('.column')).toHaveLength(4);
    });

    it('should render two rows', () => {
        wrapper.setProps({
            name:'Paolo',
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
        });
        expect(wrapper.find('.row')).toHaveLength(2);
    });

    it('should render two a elements', () => {
        wrapper.setProps({
            name:'Paolo',
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
        });
        expect(wrapper.find('a')).toHaveLength(2);
    });
});