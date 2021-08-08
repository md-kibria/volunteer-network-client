import React from 'react'
import './song.css'

function Song(props) {
    return (
        <div className='song'>
            <img src={`./img/${props.img}.jpg`} alt="" />
            <div className="songFooter">
                <div className="songDesc">
                    <h3>{props.title.length > 28 ? props.title.substr(0, 27) + '...' : props.title}</h3>
                    <p>{props.desc.substr(0, 45)}...</p>
                </div>
                <div className="songBtn">
                    <div className={props.type === 'first' ? "songPlayBtn first" : "songPlayBtn"}>
                        <i className="fa fa-play"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Song
