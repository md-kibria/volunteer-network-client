import React from 'react'
import { Link } from 'react-router-dom'

function SideNavigation() {
    return (
        <div className="admin-side-navigation">
            <h3 className='mb-4'>Navigation</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to='/admin'>Dashboard</Link>
                </li>
                <li className="list-group-item">
                    <Link to='/admin/users'>Users</Link>
                </li>
                <li className="list-group-item">
                    <Link to='/admin/addpost'>Add User</Link>
                </li>
                <li className="list-group-item">
                    <Link to='/admin/appointments'>Appointments</Link>
                </li>
                <li className="list-group-item">
                    <Link to='/admin/messages'>Massages</Link>
                </li>
                <li className="list-group-item">
                    <Link to='/admin/services'>Services</Link>
                </li>
                <li className="list-group-item">
                    Home Page
                </li>
                <li className="list-group-item">
                    About Page
                </li>
                <li className="list-group-item">
                    Patients Review
                </li>
                <li className="list-group-item">
                    Contact Info
                </li>
            </ul>
        </div>
    )
}

export default SideNavigation
