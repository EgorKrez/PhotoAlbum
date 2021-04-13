import React from 'react'
import { Link, Router } from 'react-router-dom'
import './style.css'
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const Navbar = () => {
    return (
        <div className="navbar">
            <Router history={history}>
            <Link className="navbar-item" to="/">First Page</Link>
            <Link className="navbar-item" to="/second">Second Page</Link>
            </Router>
            
            {/* <div className="navbar-item" href="/">First Page</div>
            <div className="navbar-item"href="/second">Second Page</div> */}
        </div>
    )
}

export default Navbar