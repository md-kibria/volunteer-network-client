import React from 'react'
import { Link } from 'react-router-dom'
// import {connect} from 'react-redux'
// import {login} from '../../../store/actions/authAction'

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.login({
            email: this.state.email,
            password: this.state.password
        })
    }

    render() {
        
        let { email, password } = this.state
        let error = this.props.auth.error

        return (
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h1 className='text-center display-4'>Login Here</h1>
                    <form onSubmit={this.submitHandler}>

                        <div className='form-group my-2'>
                            <label htmlFor='email'>Email: </label>
                            <input
                                placeholder='Enter your email'
                                className={error.email ? 'form-control is-invalid' : 'form-control'}
                                id='email'
                                type='eamil'
                                name='email'
                                value={email}
                                onChange={this.changeHandler}
                            />
                            {error.email && <div className='invalid-feedback'>
                                {error.email}
                            </div>}
                        </div>
                        <div className='form-group my-2'>
                            <label htmlFor='password'>Password: </label>
                            <input
                                placeholder='Enter your password'
                                className={error.password ? 'form-control is-invalid' : 'form-control'}
                                type='password'
                                id='password'
                                name='password'
                                value={password}
                                onChange={this.changeHandler}
                            />
                            {error.password && <div className='invalid-feedback'>
                                {error.password}
                            </div>}
                        </div>
                        <span className='text-danger'>{error.message}</span>
                        <p>Don't have account? <Link to='/admin/register'>Register here</Link></p>
                        <div className="form-group">
                            <button className='btn btn-secondary btn-block my-2'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth
// })

// export default connect(mapStateToProps, {login})(Login)
export default Login