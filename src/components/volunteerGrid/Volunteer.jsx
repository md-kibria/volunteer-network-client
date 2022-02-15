import React from 'react'
import './volunteer.css'

function Volunteer(props) {
    return (
        <div className="volunteer">
            <div className="imgSection">
                <img src={"/" + props.img} alt=""/>
            </div>
            <div className="textSection bg5">
                <h3>{props.name}</h3>
                {props.isVolunteer && <span title="I am Volunteer">&nbsp; 👊</span>}
            </div>
        </div>
    )
}

export default Volunteer
