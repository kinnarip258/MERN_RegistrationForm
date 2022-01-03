import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { userContext } from "../App";



const Deshboard = () => {
    
    //for login-logout
    const {state, dispatch} = useContext(userContext);
    //store the user data
    const [employeeList, setEmployeeList] = useState([]);
    //destructuring the user data
    const {_id, fname, lname, email, phone, profession, salary} = employeeList;
    //navigate the page
    const history = useHistory();

    //get the employee data
    useEffect(() => {
        Axios.get(`/dashboard`)
        .then((res) => {
            setEmployeeList(res.data)
        })
        .catch(err => {
            console.log(err);
            history.push('/Login')
        })
        
    }, [])
    
    //delete the user
    const handleDelete = (id) => {
        Axios.delete(`/deleteUser/${id}`)
        .then(
            history.push('/Registration')
        )
        .catch(err => {
            console.log("error" + err);
        })
        
    }

    return(
        <>
            <div className="main_div">
                <Navbar />
                <div className="show_data">
            
                    <div className = "eachitem">
                            <div className="header_div">
                                <h1>{` Welcome ${fname} ${lname}`}</h1>
                            </div>

                            <table>
                                <tr>
                                    <th>First Name</th>
                                    <td>{fname} </td>
                                </tr>
                                <tr>          
                                    <th>Last Name</th>
                                    <td>{lname}</td>
                                </tr>     
                                <tr>
                                    <th>Email</th>
                                    <td>{email}</td>
                                </tr>     
                                <tr>
                                    <th>Phone Number</th>
                                    <td>{phone}</td>
                                </tr>
                                <tr>
                                    <th>Profession</th>
                                    <td>{profession}</td>
                                </tr>     
                                <tr>
                                    <th>Salary</th>
                                    <td>{salary}</td>
                                </tr>
                                        
                            </table>

                            <NavLink to={`/editUser/:?id=${_id}`}><button>Edit</button></NavLink>
            
                            <button onClick={() => handleDelete(_id)}>Delete</button>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deshboard;