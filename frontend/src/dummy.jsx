import React, { useEffect, useState } from 'react';

export const Dummy = () => {
    const [users, setUsers] = useState([]);
    const [originalUsers, setOriginalUsers] = useState([]); 
    const [search, setSearch] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const userData = await response.json();
                setUsers(userData.data); 
                setOriginalUsers(userData.data); 
            } else {
                alert('An error occurred while fetching data');
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filterUser = () => {
        const trimmedSearch = search.trim().toLowerCase();
        if (trimmedSearch === '') {
            setUsers(originalUsers); 
        } else {
            const filteredUsers = originalUsers.filter(user =>
                `${user.first_name} ${user.last_name}`.toLowerCase() === trimmedSearch
            );
            setUsers(filteredUsers); 
        }
    };

    return (
        <div className="Container">
            <h1>List of Users</h1>

            <div className="Search-container">
                <input
                    type="text"
                    placeholder="Search Full Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={filterUser}>Search</button>
            </div>

            {users.length > 0 ? (
                users.map((user) => (
                    <ul key={user.id}>
                        <img src={user.avatar} alt={`${user.first_name} avatar`} />
                        <li>ID: {user.id}</li>
                        <li>Name: {user.first_name} {user.last_name}</li>
                        <li>Email: {user.email}</li>
                    </ul>
                ))
            ) : (
                <p>User not found</p> 
            )}
        </div>
    );
};

export default Dummy;
