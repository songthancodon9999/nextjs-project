import { useEffect, useState } from 'react';
// import '../../styles/users.css';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface IUser {
    _id: string;
    email: string;
    name: string;
    role: string;
}


const UsersTable = () => {
    const [usersTableData, setUsersTableData] = useState([]);
    useEffect(() => {
        // console.log('UsersTable mounted');
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
    // console.log('UsersTable rendered');

    const columns: ColumnsType<IUser> = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (value, record) => {
                return <a>{record.email}</a>
            }

        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        }
    ]

    return (
        <div>
            <h2>Users table</h2>
            <Table
                columns={columns}
                dataSource={usersTableData}
                rowKey="_id" />
        </div>
    );
}

export default UsersTable;