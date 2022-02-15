import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { loadPost, deletePost } from '../../../store/actions/postAction'
// import { connect } from 'react-redux'


export class Users extends Component {

    // componentDidMount() {
    //     this.props.loadPost()
    // }

    // deletePost = id => {
    //     this.props.deletePost(id)
    //     // window.location.reload()
    // }

    render() {

        return (
            <div className='posts'>
                <div className="page-header">
                    <div className="header-info">
                        <h1><i className="fa fa-window-restore"></i> All Posts</h1>
                        <p className='m-0'>View all posts and take action</p>
                    </div>
                    <div className="header-action">
                        <div className="btn-group btn-group-sm">
                            <button className="btn btn-primary disabled">Publish</button>
                            <button className="btn btn-warning disabled">Draft</button>
                            <button className="btn btn-danger disabled">Trush</button>
                        </div>
                        <button className="btn btn-sm btn-success">
                            <Link to='/admin/addpost'>Add New</Link>
                        </button>
                    </div>
                </div>
                <hr />

                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/admin'><i className="fa fa-dashboard"></i> Dashboard</Link></li>
                    <li className="breadcrumb-item active"><i className="fa fa-window-restore"></i> All Posts</li>
                </ul>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Author</th>
                            <th>Status</th>
                            <th>Views</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            this.props.posts.map(post => (
                                <tr key={post._id}>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td><img src={post.img} alt="" /> {post.title}</td>
                                    <td>{new Date(post.date).toDateString()}</td>
                                    <td>{post.author}</td>
                                    <td>
                                        {post.status === 'publish' ?
                                        (<span className='text-success'>Publish</span>) :
                                        ((<span className='text-danger'>Draft</span>))}
                                    </td>
                                    <td>{post.views}</td>
                                    <td>
                                        <div className="btn-group btn-group-sm">
                                            <Link to={'/admin/editpost?post=' + post._id + '&title=' + post.title + '&text=' + post.text + '&status=' + post.status} className="btn btn-warning">
                                                <i className="fa fa-edit"></i>
                                            </Link>
                                            <button type="button" className="btn btn-danger" onClick={() => this.deletePost(post._id)}>
                                                <i className="fa fa-times"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        } */}

                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td><img src='../img/1.jpg' alt="" style={{height: 30, width: 30}} /> John</td>
                            <td>134</td>
                            <td>John</td>
                            <td>
                                {true ?
                                    (<span className='text-success'>Publish</span>) :
                                    ((<span className='text-danger'>Draft</span>))}
                            </td>
                            <td>11</td>
                            <td>
                                <div className="btn-group btn-group-sm">
                                    <Link to="/" className="btn btn-warning">
                                        <i className="fa fa-edit"></i>
                                        {/* <EditPost postInfo={post} /> */}
                                    </Link>
                                    <button type="button" className="btn btn-danger" onClick="">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     posts: state.posts.posts
// })

// export default connect(mapStateToProps, { loadPost, deletePost })(Posts)
export default Users