import React, { Component } from 'react'
import './admin.css'
import Navigaiton from './navigaiton'
import SideNavigation from './sideNavigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard'
import Users from './pages/users'

export class Admin extends Component { 
    render() {


        return (
        <BrowserRouter>
            <div id='admin' className="row">
                <Navigaiton />
                <div className="col-md-3">
                    <SideNavigation />
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route path="/admin" exact component={Dashboard} />
                        <Route path="/admin/users" exact component={Users} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
        )
    }

}


// const mapStateToProps = state => ({
//     auth: state.auth
// })

// export default connect(mapStateToProps)(Admin)
export default Admin
