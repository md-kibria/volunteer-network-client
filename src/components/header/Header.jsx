import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './header.css'

function Header() {

    const [term, setTerm] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        console.log(term)
    }

    return (
        <div className="header">
            <h1>I grow by helping people in need</h1>
            <form className="searchForm" onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="search"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search volunteer"
                />
                <button type="submit">
                    <Link to={{
                        pathname: "/search/",
                        search: `?q=${term}`
                    }} >Search</Link>
                </button>
            </form>
        </div>
    )
}

export default React.memo(Header)
