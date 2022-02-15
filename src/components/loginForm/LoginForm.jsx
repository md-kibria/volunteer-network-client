import React, {useReducer, useState} from 'react'
import axios from 'axios'
import InputGroup from '../inputGroup/InputGroup'
import './loginForm..css'
import Modal from '../modal/Modal'
import {useHistory} from 'react-router-dom'

const initialState = {
    user: {},
    error: {}
}

const reducer = (state, action) => {
    switch(action.Type) {
        case 'LOAD_USER':
            return {
                user: action.payload.user,
                error: {}
            }
        case 'ERROR_USER': 
            return {
                user: {},
                error: action.payload.error 
            }
        default: 
            return state
    } 
}

function SignupForm() {

    const history = useHistory()
    const [state, dispatch] = useReducer(reducer, initialState)
    const [formData, setFormData] = useState({email: '', password: ''})
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        axios.post('/users/login', formData)
            .then(res => {
                dispatch({
                    Type: 'LOAD_USER',
                    payload: {
                        user: res.data.user
                    }
                })

                let token = res.data.token
                localStorage.setItem('auth_token', token)

                // Clear Form Data
                setFormData({email: '', password: ''})

                // Modal Call
                setIsOpen(true)

                // Goto Home
                history.push('/')
            })
            .catch(err => {
                dispatch({
                    Type: 'ERROR_USER',
                    payload: {
                        error: err.response.data
                    }
                })
            })
    }

    return (
        <form className="signupForm" onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>
                <InputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    errorMsg={state.error.email || null}
                />
                <InputGroup
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                    errorMsg={state.error.password || null}
                />
                <br/>

                <button type="submit" className="signupBtn">Login</button>

                {isOpen ? <Modal msg="Login Successfully" /> : null}
        </form>
    )
}

export default SignupForm
