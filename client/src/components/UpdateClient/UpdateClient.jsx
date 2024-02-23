import React, { useEffect, useState } from 'react'
import './UpdateClient.css'
import { Link, useParams } from 'react-router-dom'

function UpdateClient() {

    const formTemplate = { fname: '', lname: '', email: '', mobile: '', project: '' }

    const [formData, setFormData] = useState(formTemplate)


    // getting id from URL
    const { id } = useParams()


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        fetch(`http://localhost:5000/client/${id}`)
            .then((serverResponse) => {
                serverResponse.json()
                    .then((jsonServerResponse) => {
                        console.log(jsonServerResponse); setFormData(jsonServerResponse)
                    })
            })
    }, [id])


    async function handleForm(event) {

        event.preventDefault()

        const serverResponse = await fetch(`http://localhost:5000/client/${id}`, {
            headers: { "Content-Type": "application/json" },
            method: "PUT",
            body: JSON.stringify(formData),
        })
        const jsonServerResponse = await serverResponse.json()
        console.log(jsonServerResponse)
    }


    return (
        <div className='add-client-container'>
            <Link to='/'>Back</Link>
            <h3 style={{ margin: "15px 0" }}>Edit client</h3>
            <form className='add-client-form' onSubmit={handleForm}>
                <div className='input-group'>
                    <label htmlFor="fname">First Name</label>
                    <input onChange={handleChange} value={formData.fname} type="text" id='fname' name='fname' placeholder='First name' required />
                </div>
                <div className='input-group'>
                    <label htmlFor="lname">Last Name</label>
                    <input onChange={handleChange} value={formData.lname} type="text" id='lname' name='lname' placeholder='Last name' required />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} value={formData.email} type="email" id='email' name='email' placeholder='Email' required />
                </div>
                <div className='input-group'>
                    <label htmlFor="mobile">Mobile no.</label>
                    <input onChange={handleChange} value={formData.mobile} type="number" id='mobile' name='mobile' placeholder='Mobile no.' required />
                </div>
                <div className='input-group'>
                    <label htmlFor="project">Project</label>
                    <input onChange={handleChange} value={formData.project} type="text" id='project' name='project' placeholder='Project' required />
                </div>
                <div className='input-group'>
                    <button type='submit'>Update Client</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateClient