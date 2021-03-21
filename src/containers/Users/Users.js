import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserList from '../../components/UserList/UserList';
import Pagination from '../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/usersSlice';
import { CircularProgress } from '@material-ui/core';

const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users?.users)
    const userStatus = useSelector(state => state.users?.status)
    const error = useSelector(state => state.users?.error)
    const [text, setText] = useState('');
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
    const filteredUsers = users.filter((user) => {return user.name.toLowerCase().includes(text.toLowerCase()) ||
        user.username.toLowerCase().includes(text.toLowerCase()) ||
        user.email.toLowerCase().includes(text.toLowerCase()) ||
        user.phone.toLowerCase().includes(text.toLowerCase()) ||
        user.company.name.toLowerCase().includes(text.toLowerCase()) ||
        user.company.catchPhrase.toLowerCase().includes(text.toLowerCase()) ||
        user.address.city.toLowerCase().includes(text.toLowerCase()) ||
        user.address.street.toLowerCase().includes(text.toLowerCase()) ||
        user.address.zipcode.toLowerCase().includes(text.toLowerCase()) 
    })
    const currentUsers= filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    //Change page
    const onPaginateHandler = pageNumber => setCurrentPage(pageNumber);
    const onPreviousPageHandler = () => setCurrentPage((currentPage) => currentPage - 1);
    const onNextPageHandler = () => setCurrentPage((currentPage) => currentPage + 1);

    let content;

    if (userStatus === 'loading') {
        content = <CircularProgress />
    } else if (userStatus === 'succeeded') {
        content = <UserList userList={currentUsers} />
    } else if (userStatus === 'failed') {
        <div>{error}</div>
    }

    const onChangeHandler = (event) => {
        setText(event.target.value)
        setCurrentPage(1);
    }

    return (
        <>
            <SearchBar placeHolder={'Search'} onChange = {onChangeHandler}  type ="search"/>
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
