import React from 'react'
import ErrorBoundari from '../../utils/ErrorBoundari'
import Volunteer from '../volunteerGrid/Volunteer'
import './main.css'
import { Link } from 'react-router-dom'


function Main({posts}) {

    return (
        <div className="main">
            {
                posts.isLoading ? "Loading..." : (
                    posts.posts.map(post => (
                        <Link key={post._id} to={{
                            pathname: "/profile/" + post._id,
                            state: {id: post._id}
                        }}>
                            <ErrorBoundari>
                                <Volunteer
                                    name={post.name}
                                    img={post.img}
                                    isVolunteer={post.isVolunteer}
                                />
                            </ErrorBoundari>
                        </Link>
                    ))
                )
            }

            {posts.error.message || null}
        </div>
    )
}

export default Main
