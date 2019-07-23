import React from 'react'
import {Link, withRouter} from 'react-router-dom'


const Navbar = ()=>{
    return(
        <nav className="nav green">
        <div className="container">
        <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
        </div>
        </nav>
    )
}

export default withRouter(Navbar)