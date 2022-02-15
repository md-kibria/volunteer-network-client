import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/Navbar'

const initialState = {
    posts: [],
    error: {},
    isLoading: true
};
const reducer = (state, action) => {
    switch (action.Type) {
        case 'POST_LOAD':
            return {
                posts: action.payload.posts,
                error: {},
                isLoading: false
            }
        case 'POST_ERROR':
            return {
                posts: [],
                error: action.payload.error,
                isLoading: false
            }
        default:
            return state
    }
}


function Home() {

    const [posts, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('/users')
            .then(res => {
                dispatch({
                    Type: 'POST_LOAD',
                    payload: {
                        posts: res.data.users
                    }
                })
            })
            .catch(err => {
                dispatch({
                    Type: 'POST_ERROR',
                    payload: {
                        error: err
                    }
                })
            })
    }, [])

    
    return (
        <>
            <Navbar />
            <Header />
            <Main posts={posts} />
        </>
    )
}

export default Home
