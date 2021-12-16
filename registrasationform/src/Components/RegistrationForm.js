import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"; 


const RegistrationForm = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({
        Fname:"", Lname :"", Email :"", Password :"", Image :""
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {Fname, Lname , Email , Password , CPassword, Image } = userData;
        const res = await fetch( "/register", {
            method: 'POST',
            body: JSON.stringify({
                Fname, Lname , Email , Password ,CPassword, Image
            }),
            headers: { 
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else{
            window.alert("Registration Successfully");
            console.log("Registration Successfully")

            history.push('/Login');
        }
    }

    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>Registration Form</h1>
                </div>
                <hr />
                
                <div className="form_div">
                    <form method="POST" className="register_form" id="register_form">
                        <label>First Name </label> 
                        <input required name="Fname" id="Fname" value={userData.Fname} onChange={handleInputs} type='text' placeholder="Enter First Name..." />
                        
                        <label>Last Name </label>
                        <input required name="Lname" id="Lname" value={userData.Lname} onChange={handleInputs} type='text' placeholder="Enter Last Name ..." />
                        
                        <label>Email ID </label>
                        <input required name="Email" id="Email" value={userData.Email} onChange={handleInputs} type='text' placeholder="Enter Email ..." />

                        <label>Password </label>
                        <input required name="Password" id="Password" value={userData.Password} onChange={handleInputs} type='password' placeholder="Enter Password ..." />

                        <label>Conform Password </label>
                        <input required name="CPassword" id="CPassword" value={userData.CPassword} onChange={handleInputs} type='password' placeholder="Enter Conform Password ..." />


                        <input required value={userData.Img} onChange={handleInputs} type="file" name="Image" id= "image"/>
                        {/* <select>
                            <option>Select Role...</option>
                            <option>User</option>
                            <option>Admin</option>
                        </select> */}
                        <button type="submit" onClick={handleSubmit}>Register</button>
                    </form>
                </div>
                
            </div>
            <div className="sign_div">
                <NavLink to = "/Login">Already Sign In</NavLink>
            </div>
        </>
    )
}

export default RegistrationForm;