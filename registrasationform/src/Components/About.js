import React, { useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getUserDetailsUser, DeleteUser} from "../actions/userActions";

const Deshboard = () => {
    
    //dispatch the api request
    const ApiDispatch = useDispatch();
    //get response of the api request
    const user = useSelector(state => state.user)

    //navigate the page
    const history = useHistory();

    useEffect(() => {
        //dispatch getuserdetails request 
        ApiDispatch(getUserDetailsUser())
    }, [])
 
    //delete the user
    const handleDelete = (id) => {
        //dispatch deleteuser request
        ApiDispatch(DeleteUser(id));
        history.push("/Registration")
    }
   
    //destructuring the user data
    const {_id,fname, lname, email, phone, profession, salary} = user;

    return(
        <>
            <div className="main_div">
                <div className="show_data">
            
                    <div className = "eachitem">
                            <div className="header_div">
                                <h1>{`${fname} ${lname}`}</h1>
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


};

export default Deshboard;