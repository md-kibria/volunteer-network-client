import React from 'react'
import './volunteerProfileComponent.css'

function VolunteerProfileComponent({user}) {
    return (
        <div className="VprofileGrid">
            <div className="VprofileDetails">
                <div className="profile">
                    <img src={`/${user.img}`} alt=""/>
                    <div className="profileDesc">
                        <h4>{user.name}</h4>
                        <span>{user.bio}</span>
                    </div>
                </div>
                <div className="contact">
                    <h4>Contact Info</h4>
                    <ul>
                        {user.email ? (<li>
                            <i className="fa fa-envelope"></i>
                            <span>{user.email}</span>
                        </li>) : null}
                        {user.phone ? (<li>
                            <i className="fa fa-phone"></i>
                            <span>{user.phone}</span>
                        </li>) : null}
                        {user.address ? (<li>
                            <i className="fa fa-map"></i>
                            <span>{user.address}</span>
                        </li>) : null}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VolunteerProfileComponent
