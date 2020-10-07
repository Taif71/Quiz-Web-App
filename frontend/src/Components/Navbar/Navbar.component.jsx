import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.css';


const Navbar = () => {
    return (
        
            
        <div className="navbar">
            <header className="bg-black-90  w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            
            <nav className="f6 fw7 ttu tracked">
                <Link className="link dim white dib2 mr3" to="/" title="Home">Home</Link>
                <Link className="link dim white dib2 mr3" to="/quiz" title="About">Quiz</Link>
                <Link className="link dim white dib2 mr3" to="/admin" title="Store">Login</Link>            
                <Link className="link dim white dib2 mr3" to="/contact" title="Contact">Contact</Link>
                <Link className="link dim white dib2 mr3" to="/leadboard" title="Store">Leadboard</Link>
            </nav>
            </header>
        </div>
        
    );
}

export default Navbar;