import { useEffect, useState } from 'react';
import '../../styles/users.css';

interface IUser {
    email: string;
    name: string;
    role: string;
}


const UsersTable = () => {
    const [usersTableData, setUsersTableData] = useState([]);
    useEffect(() => {
        console.log('UsersTable mounted');


        getData();
    }, []);

    const getData = async () => {
        const res = await fetch('http://localhost:8000/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'admin@gmail.com',
                password: '123456'
            })

        });

        const jsonData = await res.json();
        const tokenData = jsonData.data.access_token;

        const res1 = await fetch('http://localhost:8000/api/v1/users/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenData}`
            },
        });

        const users = await res1.json();
        console.log('Users fetched:', users);
        setUsersTableData(users.data.result);
    }
    console.log('UsersTable rendered');

    return (
        <div>
            <h2>Users table</h2>

            <table>
                 <thead>
                    <tr>
                        <td>Email</td>
                        <td>Name</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                    {usersTableData.map((user: IUser, index: number) => (
                        <tr key={index}>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;