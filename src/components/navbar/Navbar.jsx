import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import './navbar.css'
import { Link, useHistory } from 'react-router-dom'
import { userContext } from '../../App'

function Navbar() {

    const token = localStorage.getItem('auth_token') 

    const history = useHistory()
    const user = useContext(userContext)
    const [userImg, setUserImg] = useState(user ? user.img : null)

    const [close, setClose] = useState(false)

    useEffect(() => {
        axios.get(user ? `/users/${user._id}` : null)
            .then(res => {
                setUserImg(res.data.user.img)
            })
            .catch(() => {
                setUserImg(user ? user.img : null)
            })
    }, [user])

    const handleClose = () => {
        setClose(!close)
    }

    const handleLogout = () => {
        localStorage.removeItem('auth_token')
        history.push('/')
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>
                    <Link to="/">LOGO</Link>
                </h1>
            </div>
            <div className="menuSection">
                <span>
                    <i className={!close ? "fa fa-bars" : "fa fa-times"} onClick={handleClose}></i>
                </span>
                <ul className={!close ? "menus" : "menus show"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="services">
                        <span>Services</span>

                        <ul className="servicesDropdown">
                            <li> Lorem </li>
                            <li> Ipsum </li>
                            <li> Dolor </li>
                            <li> Site </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/terms">Terms</Link>
                    </li>
                    {!token ? (
                        <li className="signup">
                            <Link to="/signup">SignUp</Link>
                        </li>
                    ) : null}

                    {!token ? (
                        <li className="login">
                            <Link to="/login">Login</Link>
                        </li>
                    ) : (
                        <li className="login" onClick={handleLogout}>
                            <span>Logout</span>
                        </li>
                    )}

                    {token ? (
                        <li>
                            <Link to="/profile">
                                <img src={`/${userImg}`} className="profile" alt="" />
                            </Link>
                        </li>
                    ) : null}

                </ul>
            </div>
        </nav>
    )
}

export default React.memo(Navbar)
