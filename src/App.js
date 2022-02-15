import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Terms from './pages/Terms'
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import VolunteerProfile from './pages/VolunteerProfile';
import Profile from './pages/Profile';
import Admin from './pages/admin/index'
import Search from './pages/Search'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import Test from './components/signupForm/test';

export const userContext = React.createContext()

function App() {
    
    const token = localStorage.getItem('auth_token') 
    const user = token && jwtDecode(token)

    if(token) {
        axios.defaults.headers.common['Authorization'] = token
    } else {
        axios.defaults.headers.common['Authorization'] = ''
    }

    console.log('হ্যালো বন্ধু')

    return (
        <userContext.Provider value={user}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/about" component={About} />
                    <Route path="/terms" component={Terms} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile/:id" component={VolunteerProfile} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/search" component={Search} />
                    <Route path="/test" component={Test} />
                </Switch>
            </BrowserRouter>
        </userContext.Provider>
    );
}

export default App;
