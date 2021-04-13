import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <BrowserRouter>
          <a className="navbar-item-text" href="/">First Page</a>
          <a className="navbar-item-text" href="/second">Second Page</a>
            </BrowserRouter>
        </div>
    );
}

export default Navbar