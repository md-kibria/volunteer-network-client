import React, { useContext, useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import InputGroup from '../inputGroup/InputGroup'
import './profileComponent.css'
import { userContext } from '../../App'
import Modal from '../modal/Modal'

const initialState = {
    user: {},
    error: {}
}

const reducer = (state, action) => {
    switch (action.Type) {
        case 'LOAD_USER':
            return {
                user: action.payload.user,
                error: {}
            }
        case 'USER_ERROR':
            return {
                user: {},
                error: action.payload.error
            }
        default:
            return state
    }
}

function ProfileComponent() {

    // Empty Form Data Placeholder
    let signupField = {
        name: '',
        email: '',
        img: '',
        isVolunteer: false
    }

    const user = useContext(userContext)
    const [userInfo, dispatch] = useReducer(reducer, initialState)
    const [updateData, setUpdateData] = useState(signupField)

    const data = new FormData()

    data.append('img', updateData.img)
    data.append('name', updateData.name)
    data.append('email', updateData.email)
    data.append('phone', updateData.phone)
    data.append('address', updateData.address)
    data.append('bio', updateData.bio)
    data.append('isVolunteer', updateData.isVolunteer)


    useEffect(() => {

        // Load Posts
        axios.get(`/users/${user._id}`)
            .then(res => {
                dispatch({
                    Type: 'LOAD_USER',
                    payload: {
                        user: res.data.user
                    }
                })

                setUpdateData(res.data.user)
            })
            .catch(err => {
                dispatch({
                    Type: 'USER_ERROR',
                    payload: {
                        user: err.response.data
                    }
                })
            })
    }, [user._id])

    const handleChange = event => {
        setUpdateData({
            ...updateData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        axios.put(`/users/${user._id}`, data)
            .then(res => {
                dispatch({
                    Type: 'LOAD_USER',
                    payload: {
                        user: res.data.user
                    }
                })

                setUpdateData(res.data.user)
            })
            .catch(err => {
                dispatch({
                    Type: 'USER_ERROR',
                    payload: {
                        error: err.response.data
                    }
                })
            })
    }

    return (
        <div className="profileGrid">
            <div className="profileDetails">
                <div className="profile">
                    <img src={userInfo.user.img} alt="" />
                    <div className="profileDesc">
                        <h4>{userInfo.user.name}</h4>
                        <span>{userInfo.user.bio}</span>
                    </div>
                </div>
                <div className="contact">
                    <h4>Contact Info</h4>
                    <ul>
                        {userInfo.user.email ? (
                            <li>
                                <i className="fa fa-envelope"></i>
                                <span>{userInfo.user.email}</span>
                            </li>
                        ) : null}

                        {userInfo.user.phone ? (
                            <li>
                                <i className="fa fa-phone"></i>
                                <span>{userInfo.user.phone}</span>
                            </li>
                        ) : null}

                        {userInfo.user.address ? (
                            <li>
                                <i className="fa fa-map"></i>
                                <span>{userInfo.user.address}</span>
                            </li>
                        ) : null}

                    </ul>
                </div>
            </div>
            <form className="profileEdit" onSubmit={(e) => handleSubmit(e)}>
                <div className='form' >
                    <InputGroup
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        value={updateData.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <InputGroup
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={updateData.email}
                        onChange={(e) => handleChange(e)}
                    />

                    <InputGroup
                        label="Phone"
                        name="phone"
                        placeholder="Your phone"
                        value={updateData.phone}
                        onChange={(e) => handleChange(e)}
                    />

                    <InputGroup
                        label="Address"
                        name="address"
                        placeholder="Your address"
                        value={updateData.address}
                        onChange={(e) => handleChange(e)}
                    />

                    <InputGroup
                        label="Bio"
                        name="bio"
                        placeholder="Your bio"
                        value={updateData.bio}
                        onChange={(e) => handleChange(e)}
                    />

                    <div className="checkBox">
                        <input type="checkbox" name="volunteer" id="" onChange={(e) => setUpdateData({ ...updateData, isVolunteer: e.target.checked })} checked={updateData.isVolunteer} />
                        <span>Contibute as a volunteer</span>
                    </div>

                    <button type="submit" className="signupBtn">Update</button>
                </div>
                <div className="updateImg">
                    <img src={updateData.img} alt="" />

                    <i className="fa fa-upload">
                        <input type="file" name="img" onChange={(e) => setUpdateData({ ...updateData, img: e.target.files[0] })} />
                    </i>
                </div>
            </form>

            {userInfo.error.msg ? <Modal msg={userInfo.error.msg} /> : null}

        </div>
    )
}

export default ProfileComponent
