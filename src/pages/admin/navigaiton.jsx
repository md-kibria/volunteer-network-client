import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {logout} from '../../store/actions/authAction'
import { Link } from 'react-router-dom'

class Navigaiton extends Component {

    handleClick = () => {
        this.props.logout()
    }

    render() {

        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark px-5">
                <Link to='/admin' className="navbar-brand" >Admin</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ml-auto" style={{marginLeft: 'auto'}}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        )
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth
// })

// export default connect(mapStateToProps, {logout})(Navigaiton)
export default Navigaiton
