import React, {useState} from 'react'
import './header.css'

function Header() {

    const [search, setSearch] = useState()

    const haneleSubmit = (event) => {
        event.preventDefault()
        
        if (search) {
            alert(search)
            setSearch('')
        } else {
            alert('Fill the text field')
        }
    }

    return (
        <div>
            <nav>
                <h2>Logo</h2>
                <p className="singin">SignIn</p>
            </nav>
            <h1 className="title">Search Song</h1>
            <form className="searchBar" onSubmit={(e) => haneleSubmit(e)}>
                <input
                    type="text" 
                    className="searchField"
                    placeholder="Search by name or lyrics"
                    name="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className="searchBtn" type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Header
