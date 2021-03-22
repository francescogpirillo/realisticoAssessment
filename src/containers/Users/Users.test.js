import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Users from './Users';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Provider } from 'react-redux';
import App from '../../App';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchUsers } from '../../store/usersSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    users: [],
    status: 'idle',
    error: null
};

const store = mockStore(initState);
store.dispatch = jest.fn();
configure({ adapter: new Adapter() });

describe('<Users />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <App>
                    <Users />
                </App>
            </Provider>
        );
    })

    it('should render one Pagination component', () => {
        expect(wrapper.find(Pagination)).toHaveLength(1);
    });

    it('should render one SearchBar component', () => {
        expect(wrapper.find(SearchBar)).toHaveLength(1);
    });

    it('should expect fulfilled action', () => {
        const expectedActions = ['users/fetchUsers/pending','users/fetchUsers/fulfilled']

        return store?.dispatch(fetchUsers())?.then(() => {
                const actualActions = store?.getActions().map(action => action.type)
                expect(actualActions).toEqual(expectedActions)
        })
    })
});


