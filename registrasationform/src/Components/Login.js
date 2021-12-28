import React, { useState } from "react";
import { NavLink , useHistory} from "react-router-dom/cjs/react-router-dom.min";
import Axios from "axios";
import { useFormik } from "formik";
const Login = () => {

    const history = useHistory();
    
    const formik = useFormik({
        initialValues: {
            email: "", password: ""
        },

        onSubmit: (values) => {
            Axios.post(`/signIn`,values)
                .then((res) => {
                    const data = res.data;
                    alert("Login sucessfully!");
                    console.log("Login sucessfully!");
                    history.push('/Dashboard');
                    
                })
                .catch(err => {
                    alert("Invalid Credientials");
                    console.log(err);
                })
            }
    })
    

    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Login</h1>
                </div>
                <hr />
                <div className="form_div">
                    <form onSubmit={formik.handleSubmit}>
                        <label>Username </label> 
                        <input required type='text' name="email" value={formik.values.email}
                         onChange={formik.handleChange} placeholder="Enter Email ID..." />
                        
                        <label>Password </label>
                        <input required type='password' name="password" value={formik.values.password}
                         onChange={formik.handleChange} placeholder="Enter Password ..." />
                        
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