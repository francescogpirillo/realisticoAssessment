import React from 'react';
import UserItem from '../UserItem/UserItem';
import PropTypes from 'prop-types';

const UserList = ({ userList }) => {

    return (
        <>
            <table>
                <tbody>
                    {userList && userList.map((userItem) => 
                        <tr key={userItem.id}>
                            <td >
                                <UserItem
                                    name={userItem.name}
                                    email={userItem.email}
                                    address={userItem.address}
                                    phone={userItem.phone}
                                    website={userItem.website}
                                    company={userItem.company}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

UserList.propTypes = {
    userList: PropTypes.array  
};

export default UserList;