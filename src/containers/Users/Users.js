import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserList from '../../components/UserList/UserList';
import Pagination from '../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/usersSlice';
import LoadingProgress from '../../components/LoadingProgress/LoadingProgress';

const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users?.users)
    const userStatus = useSelector(state => state.users?.status)
    const error = useSelector(state => state.users?.error)
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(4);

    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(fetchUsers())
        }
    }, [userStatus, dispatch])

    
    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const filteredUsers = users.filter((user) => {return user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.username.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchText.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.company.catchPhrase.toLowerCase().includes(searchText.toLowerCase()) ||
        user.address.city.toLowerCase().includes(searchText.toLowerCase()) ||
        user.address.street.toLowerCase().includes(searchText.toLowerCase()) ||
        user.address.zipcode.toLowerCase().includes(searchText.toLowerCase()) 
    })
    const currentUsers= filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    //Change page
    const onPaginateHandler = pageNumber => setCurrentPage(pageNumber);
    const onPreviousPageHandler = () => setCurrentPage((currentPage) => currentPage - 1);
    const onNextPageHandler = () => setCurrentPage((currentPage) => currentPage + 1);

    let content;

    if (userStatus === 'loading') {
        content = <LoadingProgress/>
    } else if (userStatus === 'succeeded') {
        content = <UserList userList={currentUsers} />
    } else if (userStatus === 'failed') {
        <div>{error}</div>
    }
    
    const onChangeHandler = (event) => {
        setSearchText(event.target.value)
        setCurrentPage(1);
    }

    return (
        <>
            <SearchBar placeHolder={'Search'} onChange={onChangeHandler} type="search"/>
            {content}
            <Pagination usersPerPage={usersPerPage}
                totalUsers={filteredUsers.length}
                currentPage={currentPage}
                paginate={onPaginateHandler}
                previousPage={onPreviousPageHandler}
                nextPage={onNextPageHandler} />
        </>
    );
}

export default Users;
