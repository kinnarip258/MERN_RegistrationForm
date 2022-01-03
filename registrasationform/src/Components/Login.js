import React, { useContext, useEffect } from "react";
import { NavLink , useHistory} from "react-router-dom";
import Axios from "axios";
import { useFormik } from "formik";
import Navbar from "./Navbar";
import { userContext } from "../App";

const Login = () => {

    //for login-logout
    const {state, dispatch} = useContext(userContext);
    //navigate the page
    const history = useHistory();
    
    const formik = useFormik({
        initialValues: {
            email: "", password: ""
        },

        onSubmit: (values) => {
            //login the user
            Axios.post(`/signIn`,values)
                .then(() => {
                   
                    alert("Login sucessfully!");
                    dispatch({type: 'User', payload: true})
                    history.push('/Dashboard');  
                })
                .catch(err => {
                    alert("Invalid Credientials");
                    console.log(err);
                })
            }
    })
    
    useEffect(() => {
        Axios.get(`/isLogged`)
        .then(() => {
            history.push('/Dashboard');
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <>
            <div className="main_div">
            <Navbar/>
                <div className="header_div">
                    <h1>Login Form</h1>
                </div>
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