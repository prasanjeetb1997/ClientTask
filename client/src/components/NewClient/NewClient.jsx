import React, { useState } from 'react'
import './NewClient.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewClient() {

    const formTemplate = { fname: '', lname: '', email: '', mobile: '', project: '' }

    const [formData, setFormData] = useState(formTemplate)
    const [isFetching, setIsFetching] = useState(false)


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };




    // sending form data to server
    async function handleForm(event) {

        event.preventDefault()

        setIsFetching(true)
        const serverResponse = await fetch("http://localhost:5000/create", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(formData),
        })

        const jsonServerResponse = await serverResponse.json()
        console.log(jsonServerResponse)

        setIsFetching(false)
        if (jsonServerResponse.success) {
            toast("New Client Added!");
        } else if (jsonServerResponse.code === 11000) {
            toast("This email is already used! Try different one")
        }
    }



    return (
        <div className='add-client-container'>
            <Link to='/'>Back</Link>
            <h3 style={{ margin: "15px 0" }}>Add New client</h3>
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
                    <button hidden={isFetching} type='submit'>Create Client</button>
                </div>
            </form>
            <div>
                <ToastContainer theme='dark' />
            </div>
        </div>
    )
}

export default NewClient