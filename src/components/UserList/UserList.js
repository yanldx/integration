import React from 'react';
import './UserList.css';

const UserList = ({ users, onDeleteUser }) => {
    return (
        <div>
            <h2>Registered Users</h2>
            <ul>
                {users.length === 0 ? (
                    <p>No users registered yet.</p>
                ) : (
                    users.map((user, index) => (
                        <li key={index}>
                            {user.firstName} {user.lastName} - {user.email}
                            <button onClick={() => onDeleteUser(index)}>Delete</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default UserList;
