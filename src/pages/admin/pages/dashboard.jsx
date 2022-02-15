import React from 'react'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="page-header">
                <div className="header-info">
                    <h1><i className="fa fa-dashboard"></i> Dashboard</h1>
                    <p className='m-0'>Hello this is dashboard 😶</p>
                </div>
                <div className="header-action"></div>
            </div>
            <hr />

            <ul className="breadcrumb">
                <li className="breadcrumb-item active">/<i className="fa fa-dashboard"></i> Dashboard</li>
            </ul>


        </div>
    )
}

export default Dashboard