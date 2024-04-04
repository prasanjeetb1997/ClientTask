import React, { useEffect, useState } from 'react'
import './ClientsList.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ClientsList() {

    const [clients, setClients] = useState([])
    const [deletedClient, setDeletedClient] = useState()

    console.log(clients)

    useEffect(() => {
        fetch("http://localhost:5000/all")
            .then((serverResponse) => {
                serverResponse.json()
                    .then((jsonServerResponse) => {
                        console.log(jsonServerResponse); setClients(jsonServerResponse)
                    })
            })
    }, [deletedClient])



    async function handleDelete(clientid) {
        const serverResponse = await fetch(`http://localhost:5000/delete/${clientid}`, { method: "DELETE" })
        const jsonServerResponse = await serverResponse.json()
        console.log(jsonServerResponse)
        setDeletedClient(jsonServerResponse)
        toast("Client deleted successfully!")
    }

    return (
        <div className='container'>
            <div id='sub-container'>
                <Link to='/add'> <button className='add-client-btn bold-font'>Add Client</button></Link>
                <table className='client-table' border={1} cellSpacing={0}>
                    <thead>
                        <tr className='bold-font'>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile no.</th>
                            <th>Project</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.length !== 0 ?
                            clients.map((client, index) => (
                                <tr key={index}>
                                    <td>{client.fname}</td>
                                    <td>{client.lname}</td>
                                    <td>{client.email}</td>
                                    <td>{client.mobile}</td>
                                    <td>{client.project}</td>
                                    <td className='action-btns'><button onClick={() => { handleDelete(client._id) }}>Delete</button><Link to={`/update/${client._id}`}>Edit</Link></td>
                                </tr>
                            )) : <tr><td colSpan={6}><h2 style={{margin:"3vh auto"}}>No clients added</h2></td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <ToastContainer theme='dark' />
            </div>
        </div>
    )
}

export default ClientsList