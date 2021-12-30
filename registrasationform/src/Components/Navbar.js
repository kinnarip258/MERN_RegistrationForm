import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="nav_div">
                
                <NavLink to = '/Registration'>Registration</NavLink>
                    
                <NavLink to = '/Login'>Login</NavLink>

                <NavLink to = '/Dashboard'>Dashboard</NavLink>

                <NavLink to = '/Logout'>Logout</NavLink>
            </div>
            <hr/>
        </>
    )
}

export default Navbar
