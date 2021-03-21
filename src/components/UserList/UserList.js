import React from 'react';
import UserItem from '../UserItem/UserItem';

const UserList = ({ userList }) => {

    return (
        <>
            <table>
                <tbody>
                    {userList.map((userItem) =>
                        <tr key={userItem.id}>
                            <td>
                                <UserItem
                                    name={userItem.name}
                                    username={userItem.username}
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

export default UserList;