import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="nav_div">
                
                <NavLink to = '/Registration'>Registration</NavLink>
                    
                <NavLink to = '/login'>Login</NavLink>
                    
            </div>
            <div className="header_div">
                <h1>Welcome Home</h1>
            </div>
        </>
    )
}

export default Home;