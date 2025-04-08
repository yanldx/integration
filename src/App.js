import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    }, [users]);

    const handleFormSubmit = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
        toast.success('User registered successfully!');
    };

    const handleDeleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        toast.success('User deleted successfully!');
    };

    return (
        <div>
            <header>
                <h1>User Registration App</h1>
                <p>Welcome to the User Registration Application</p>
            </header>
            <main>
                <Form onSubmit={handleFormSubmit} />
                <UserList users={users} onDeleteUser={handleDeleteUser} />
                <ToastContainer />
            </main>
        </div>
    );
};

export default App;
