import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import './UserList.css';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [sortBy, setSortBy] = useState('firstName');

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(savedUsers);
    }, []);

    const handleUserAdded = (newUsers) => {
        setUsers(newUsers);
    };

    // Fonction pour supprimer un utilisateur
    const handleDeleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const handleSort = (criteria) => {
        setSortBy(criteria);
        const sortedUsers = [...users].sort((a, b) => {
            if (a[criteria] < b[criteria]) return -1;
            if (a[criteria] > b[criteria]) return 1;
            return 0;
        });
        setUsers(sortedUsers);
    };

    return (
        <div>
            <h2>Registered Users</h2>
            <Form onUserAdded={handleUserAdded} />

            <div>
                <button onClick={() => handleSort('firstName')}>Sort by First Name</button>
                <button onClick={() => handleSort('email')}>Sort by Email</button>
            </div>

            <ul>
                {users.length === 0 ? (
                    <p>No users registered yet.</p>
                ) : (
                    users.map((user, index) => (
                        <li key={index}>
                            {user.firstName} {user.lastName} - {user.email}
                            <button onClick={() => handleDeleteUser(index)}>Delete</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default UserList;
