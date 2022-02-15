import React from 'react'
import './singlePage.css'

function SinglePage(props) {
    return (
        <div className="singlePage">
            <h2>{props.title}</h2>
            <div className="text">
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default SinglePage
