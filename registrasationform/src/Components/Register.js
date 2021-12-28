import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {useHistory, NavLink} from "react-router-dom";
import {useFormik} from "formik";
import queryString from "query-string";
const Register = () => {
    
    const history = useHistory();
    const [editedObject,setEditedObject ] = useState([]);
    const {id} = queryString.parse(window.location.search);
    const formik = useFormik({
        initialValues: {
            fname:"",  lname:"", email:"", password:"" , cpassword:""
        },

        onSubmit: (values) =>  {
            if(id){ 
                Axios.put(`/updateUser/${id}`, values)
                .then(() => {
                    history.push('/Dashboard');
                })
                .catch(err => {
                    console.log("error: " + err)
                })
            }
            else{
            
                Axios.post(`/signUp`, values)
                .then((res) => {
                    const data = res.data;
                    alert("Registration Successfully");
                    console.log("Registration Successfully");
                    history.push('/Login');
                })
                .catch(err => {
                    alert("Invalid Registration");
                    console.log(err)
                })
            }
        }     
    });

    useEffect(() => {
        if(id) {
            Axios.get(`/editUser/${id}`)
            .then(res => {
                setEditedObject(res.data);
            })
            .catch(err => {
                console.log("error: " + err);
            })
        }
    }, [id]);

    useEffect(() => {
        if(id && editedObject) {
            formik.setValues(editedObject)
        }
    }, [editedObject])
    return (
        <div>
                <div className="header_div">
                    <h1>Employee Form</h1>
                </div>
                <hr />
             <div className="form_div">
                <form className="register_form" id="register_form" onSubmit={formik.handleSubmit}>
                    <label>First Name </label> 
                    <input required onChange={formik.handleChange} value={formik.values.fname}  name="fname"  type='text' placeholder="Enter First Name..." />

                    <label>Last Name </label> 
                    <input required onChange={formik.handleChange} value={formik.values.lname}  name="lname"  type='text' placeholder="Enter Last Name..." />
                                            
                    <label>Email ID </label>
                    <input required onChange={formik.handleChange} value={formik.values.email}  name="email"type='Email' placeholder="Enter Email ..." />

                    <label>Password </label>
                    <input required onChange={formik.handleChange} value={formik.values.password}  name="password" type='Password' placeholder="Enter Password ..." />

                    <label>Confirm Password </label>
                    <input required onChange={formik.handleChange} value={formik.values.cpassword}  name="cpassword" type='Password' placeholder="Enter Confirm Password ..." />

                    <button type="submit">{!id ? "Register" : "Update" }</button>
                </form>
            </div>

            <div className="sign_div">
                <NavLink to = "/Login">Already Sign In</NavLink>
            </div>
        </div>
    )
}

export default Register
