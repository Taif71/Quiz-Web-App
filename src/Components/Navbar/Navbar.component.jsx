import React from 'react';

import './navbar.styles.css';


const Navbar = () => {
    return (
        
            
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            
        <nav className="f6 fw7 ttu tracked">
            <a className="link dim white dib2 mr3" href="/" title="Home">Home</a>
            <a className="link dim white dib2 mr3" href="/" title="About">Quiz</a>
            <a className="link dim white dib2 mr3" href="/" title="Store">Login</a>            
            <a className="link dim white dib2 mr3" href="/" title="Contact">Contact</a>
            <a className="link dim white dib2 mr3" href="/" title="Store">Leadboard</a>
        </nav>
        </header>
        
    );
}

export default Navbar;