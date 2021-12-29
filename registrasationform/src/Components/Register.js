import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {useHistory, NavLink} from "react-router-dom";
import {useFormik} from "formik";
import queryString from "query-string";
const Register = () => {
    //navigate the page
    const history = useHistory();
    //for store the edited user data
    const [editedObject,setEditedObject ] = useState([]);
    //get edited user id
    const {id} = queryString.parse(window.location.search);
    const formik = useFormik({
        initialValues: {
            fname:"",  lname:"", email:"", phone:"", profession:"", salary:"", password:"" , cpassword:"", 
        },

        onSubmit: (values) =>  {
            //update the user data
            if(id){ 
                Axios.put(`/updateUser/${id}`, values)
                .then(() => {
                    history.push('/Dashboard');
                })
                .catch(err => {
                    console.log("error: " + err)
                })
            }
            //add new user
            else{
                Axios.post(`/signUp`, values)
                .then((res) => {
                    alert("Registration Successfully");
                    history.push('/Login');
                })
                .catch(err => {
                    alert("Invalid Registration");
                    console.log(err)
                })
            }
        }     
    });
    //for getting the edited user data
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
    //set edited user data values
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
                    <input required onChange={formik.handleChange} value={formik.values.email}  name="email" type='Email' placeholder="Enter Email ..." />

                    <label>Phone Number</label>
                    <input required onChange={formik.handleChange} value={formik.values.phone}  name="phone" type='number' placeholder="Enter Phone Number ..." />

                    <label>Profession </label>
                    <input required onChange={formik.handleChange} value={formik.values.profession}  name="profession" type='text' placeholder="Enter Profession ..." />

                    <label>Salary</label>
                    <input required onChange={formik.handleChange} value={formik.values.salary}  name="salary" type='number' placeholder="Enter Salary ..." />

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
