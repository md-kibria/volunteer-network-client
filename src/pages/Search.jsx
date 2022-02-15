import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/Navbar'

const initialState = {
    posts: [],
    error: {},
    isLoading: true
}

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

function Search(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`/users/search/${props.location.search.substr(3)}`)
            .then(res => {
                console.log(res.data.users)
                dispatch({
                    Type: 'POST_LOAD',
                    payload: {
                        posts: res.data.users
                    }
                })
            })
            .catch(error => {
                dispatch({
                    Type: 'POST_ERROR',
                    payload: {
                        error: error
                    }
                })
            })
    }, [props.location.search])

    console.log(state)

    return (
        <div>
            <Navbar />
            <h4 style={{ margin: 0, marginLeft: 100, marginTop: 100 }}>
                Search result for "{props.location.search.substr(3)}"
            </h4>
            {/* <Main posts={state} /> */}
            {state.posts.length === 0  ? <h1 style={{textAlign: 'center', marginTop: 140}}>No result!</h1> : <Main posts={state} />}
        </div>
    )
}

export default Search
