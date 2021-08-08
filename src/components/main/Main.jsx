import React from 'react'
import Song from '../song/Song'
import './main.css'

function Main() {
    return (
        <div className="main">
            <div className="popularSong">
                <Song 
                    type='first'
                    title="This is first song"
                    desc="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, mollitia?"
                    img="1"
                />
            </div>
            <div className="allSongs">
                <Song 
                    title="This is second song"
                    desc="Lorem ipsum dolor sit amet Lorem ipsum dolor"
                    img="2"
                />
                <Song 
                    title="This is third song"
                    desc="Lorem ipsum dolor sit amet Lorem ipsum dolor"
                    img="3"
                />
                <Song 
                    title="This is forth song"
                    desc="Lorem ipsum dolor sit amet Lorem ipsum dolor"
                    img="4"
                />
                <Song 
                    title="This is Fiveth song"
                    desc="Lorem ipsum dolor sit amet Lorem ipsum dolor"
                    img="5"
                />
                <Song 
                    title="This is second song"
                    desc="Lorem ipsum dolor sit amet Lorem ipsum dolor"
                    img="2"
                />
                <Song 
                    title="This is third song"
                    desc="Lorem ipsum dolor sit amet Lorem ipsum dolor"
                    img="3"
                />
            </div>
        </div>
    )
}

export default Main
