import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {

    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Login</h1>
                </div>
                <hr />
                <div className="form_div">
                    <form>
                        <label>Username </label> 
                        <input type='text' required placeholder="Enter Email ID..." />
                        
                        <label>Password </label>
                        <input type='password' required placeholder="Enter Password ..." />
                        
                        <button type="submit">Log In</button>
                    </form>
                </div>
                
            </div>
            <div className="sign_div">
                <NavLink to = "/Registration">Create An Account</NavLink>
            </div>
        </>
    )
}

export default Login;