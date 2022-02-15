import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../components/navbar/Navbar'
import VolunteerProfileComponent from '../components/VolunteerProfile/VolunteerProfileComponent'

function VolunteerProfile(props) {

    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`/users/${props.match.params.id}`)
            .then(res => {
                setUser(res.data.user)
            })
            .catch()
    }, [props.match.params.id])

    return (
        <div>
            <Navbar />
            <VolunteerProfileComponent user={user} />
        </div>
    )
}

export default VolunteerProfile
