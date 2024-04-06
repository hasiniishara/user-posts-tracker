import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className="links">
                <Link to={"/"}>Home</Link>
            </div>
        </nav>
        
    );
};
