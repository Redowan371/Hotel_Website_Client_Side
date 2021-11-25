import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './ManageOreder.css';
    
const ManageOrder = () => {
    const { user } = useAuth()

    const [all, setAll] = useState([])

    useEffect(() => {
        fetch('https://obscure-everglades-45396.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAll(data))
    }, [])
    const handleDelete = (id) => {
        const confrim = window.confirm('you want delete this item?')
        if (confrim) {
            fetch(`https://obscure-everglades-45396.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("delete Successfully")
                        const remainingUser = all.filter(a => a._id !== id)
                        setAll(remainingUser)
                    }
                })
        }
        
    }
    return (
        <div className='table-res' >
            <Container className='mb-3'>
                <div className="title">
                    <h1 className='text-center my-3'>Manage <span>Users</span></h1>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Users Name</th>
                            <th>email</th>
                            <th>Category</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    {
                        all.map(us => <tbody>
                            <tr>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{us.cat}</td>
                                <td><Button onClick={() => handleDelete(us._id)}>Delete</Button></td>
                            </tr>
                        </tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default ManageOrder;