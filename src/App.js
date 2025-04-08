import React, { useState } from 'react';
import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);

    const handleFormSubmit = (user) => {
        setUsers([...users, user]);
        toast.success('User registered successfully!');
    };

    return (
        <div>
            <header>
                <h1>User Registration App</h1>
                <p>Welcome to the User Registration Application</p>
            </header>
            <main>
                <Form onSubmit={handleFormSubmit} />
                <UserList users={users} />
                <ToastContainer />
            </main>
        </div>
    );
};

export default App;
