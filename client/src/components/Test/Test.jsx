import React from 'react'
import { Link } from 'react-router-dom'
import './Test.css'


function Test() {




    return (
        <div className='test-container'>
            <div>
                <Link> <button className='add-client-button'>Add Client</button></Link>
                <table border={1} className='clients-table'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile no.</th>
                            <th>Project</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Prasanjeet</td>
                            <td>Biswas</td>
                            <td>PrasanjeetBiswas11111@gma.com</td>
                            <td>99999999999</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td>
                                <button className='del-button'>Delete</button><Link><button className='edit-button'>Edit</button></Link>
                            </td>
                        </tr>

                        <tr>
                            <td>Prasanjeet</td>
                            <td>Biswas</td>
                            <td>PrasanjeetBiswas11111@gma.com</td>
                            <td>99999999999</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td>
                                <button className='del-button'>Delete</button><Link><button className='edit-button'>Edit</button></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Test