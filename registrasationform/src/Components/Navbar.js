import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from '../App';

const Navbar = () => {
    
    const {state, dispatch} = useContext(userContext);
    if(state){
        return (
            <>
                <div className="nav_div">
                        
                    <NavLink to = '/'> Home </NavLink>
    
                    <NavLink to = '/Registration'>Registration</NavLink>
                            
                    <NavLink to = '/Login'>Login</NavLink>
                       
                    <NavLink to = '/Dashboard'>Dashboard</NavLink>
        
                    <NavLink to = '/Logout'>Logout</NavLink>
                    
                </div>
    
                <hr/>
            </>
        )
    }
    else{

        return (
            <>
                <div className="nav_div">
                        
                    <NavLink to = '/Registration'>Registration</NavLink>
                            
                    <NavLink to = '/Login'>Login</NavLink>
                       
                    <NavLink to = '/Dashboard'>Dashboard</NavLink>
                    
                </div>
    
                <hr/>
            </>
        )
    }
    
}

export default Navbar
