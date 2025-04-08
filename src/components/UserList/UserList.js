import React from 'react';

const UserList = ({ users }) => {
    return (
        <div>
            <h2>Registered Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.firstName} {user.lastName} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
