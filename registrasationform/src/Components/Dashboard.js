import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Axios from "axios";


const Deshboard = () => {

    const [employeeList, setEmployeeList] = useState([]);
    const serialNo = 0;
    useEffect(() => {
        Axios.get(`/getUsers`)
        .then((res) => {
            console.log("from deshboard res data: ", res.data)
            setEmployeeList(res.data)
        })
    }, [])

    const handleDelete = (id) => {
        Axios.delete(`/deleteUser/${id}`)

        .catch(err => {
            console.log("error" + err);
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <h1>User Deshboard</h1>
                </div>

                <div className="nav_div">
                    <label>All</label>
                    <label>Active</label>
                    <label>Deactive</label>
                </div>

                <div>
                    <table style={{"width": "100%"}}>
                        <tr>
                            <th>Serial No.</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </table>
                </div>
                <div className="show_data">
                {
                        employeeList.map((ele) => {
                            return(
                                <div className = "eachitem" key = {ele.id}>
                                    <table style={{"width" : "100%"}}>
                                        <tr>
                                            <td>{ele._id}</td>
                                            <td>{ele.fname} {ele.lname}</td>
                                            <td>{ele.email}</td>
                                            <NavLink to={`/editUser/:?id=${ele._id}`}><button>Edit</button></NavLink>
                                            <td><button onClick={() => handleDelete(ele._id)}>Delete</button></td>
                                        </tr>
                                    </table>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="header_div">
                    <NavLink to = "/">Home</NavLink>
                </div>
                <div className="header_div">
                    <NavLink to = "/Registration">Registration</NavLink>
                </div>
                <div className="header_div">
                    <NavLink to = "/Login">Login</NavLink>
                </div>
            </div>
        </>
    )
}

export default Deshboard;