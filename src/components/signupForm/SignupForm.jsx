import React, { useState, useReducer } from 'react'
import axios from 'axios'
import InputGroup from '../inputGroup/InputGroup'
import './signupForm.css'
import Modal from '../modal/Modal'


const initialState = {
    error: {},
    user: {}
}

const reducer = (state, action) => {
    switch (action.Type) {
        case 'SIGNUP_SUCCESS':
            return {
                user: action.payload.user,
                error: {}
            }
        case 'SIGNUP_ERROR':
            return {
                error: action.payload.error,
                user: {}
            }
        default:
            return state
    }
}

function SignupForm(props) {

    // Empty Form Data Placeholder
    let signupField = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        img: '',
        isVolunteer: false
    }

    // Form Data Storage
    const [signupInfo, setSignupInfo] = useState(signupField)
    const [showModal, setShowModal] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    // HandLe OnChange
    const handleOnchange = event => {

        setSignupInfo({
            ...signupInfo,
            [event.target.name]: event.target.files ? event.target.files[0] : event.target.value
        })
    }

    // Submit Handler
    const handleSubmit = e => {
        e.preventDefault()

        const data = new FormData()
        data.append('img', signupInfo.img)
        data.append('name', signupInfo.name)
        data.append('email', signupInfo.email)
        data.append('password', signupInfo.password)
        data.append('confirmPassword', signupInfo.confirmPassword)
        data.append('isVolunteer', signupInfo.isVolunteer)

        axios.post('/users/signup', data)
            .then(res => {
                localStorage.setItem('auth_token', res.data.token)
                dispatch({
                    Type: 'SIGNUP_SUCCESS',
                    payload: {
                        user: res.data.user
                    }
                })

                // Clear SignUpInfo
                setSignupInfo(signupField)
                // Show And Reset Modal

                setShowModal(true)
                // setShowModal(false)

                // Change Directory
                // window.history.pushState('/login')
            })
            .catch(error => {
                dispatch({
                    Type: 'SIGNUP_ERROR',
                    payload: {
                        error: error.response.data
                    }
                })
            })
    }



    return (
        <form className="signupForm" onSubmit={e => handleSubmit(e)}>
            <h2>Sing Up</h2>
            <InputGroup
                label="Name"
                name="name"
                placeholder="Enter your name"
                value={signupInfo.name}
                onChange={e => handleOnchange(e)}
                errorMsg={state.error.name || null}
            />
            <InputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={signupInfo.email}
                onChange={e => handleOnchange(e)}
                errorMsg={state.error.email || null}
            />
            <InputGroup
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={signupInfo.password}
                onChange={e => handleOnchange(e)}
                errorMsg={state.error.password || null}
            />

            <InputGroup
                label="Confirmation Password"
                name="confirmPassword"
                type="password"
                placeholder="Enter your confirmaiton password"
                value={signupInfo.confirmPassword}
                onChange={e => handleOnchange(e)}
                errorMsg={state.error.confirmPassword || null}
            />

            <InputGroup
                label="Profile Picture"
                name="img"
                type="file"
                placeholder="Enter your password"
                onChange={e => handleOnchange(e)}
            />

            <div className="checkBox">
                <input
                    type="checkbox"
                    name="isVolunteer"
                    checked={signupInfo.isVolunteer}
                    onChange={e => setSignupInfo({ ...signupInfo, isVolunteer: e.target.checked })}
                />
                <span>Contibute as a volunteer</span>
            </div>

            <button type="submit" className="signupBtn">Sign Up</button>

            {/* Modal */}
            {showModal ? <Modal msg="Signup successfully!" /> : null}


        </form>
    )
}

export default SignupForm
