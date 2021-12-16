import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Deshboard = () => {
    return(
        <>
            <div className="main_div">
                <div className="header_div">
                    <NavLink to = "/">welcome</NavLink>
                </div>

                <div className="nav_div">
                    <label>All</label>
                    <label>Active</label>
                    <label>Deactive</label>
                </div>

                <div>
                    <table>
                        <tr>
                            <th>Serial No.</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Deshboard;