import Axios from 'axios';

//Register User action
export const RegisterUser = (values) => {
    return (dispatch) => {
        Axios.post(`/signUp`, values)
        .then(res => {
            const userData = res.data;
            console.log("userData from actions register: ", userData);
            alert("Register Successfully!")
            dispatch({type: "Register_User", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
            alert("Invalid Credentials!");
        });
    }
}

//Save Update action
export const SaveUpdate = (id,values) => {
    return (dispatch) => {
        Axios.put(`/updateUser/${id}`, values) 
        .then(res => {
            const userData = res.data;
            dispatch({type: "Save_Update", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }     
}

//Login User action
export const LoginUser = (values) => {
    
    return (dispatch) => {
        Axios.post(`/signIn`, values) 
        .then(res => {
            const userData = res.data;
            alert("Login Successfully!")
            dispatch({type: "Login_User", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
            alert("Invalid Credentials!")
        });
    }
}

//Edit User action
export const EditUser = (id) => {
    
    return (dispatch) => {
        Axios.get(`/editUser/${id}`)
        .then(res => {
            const userData = res.data;
            dispatch({type: "Edit_User", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }
}

//Delete User action
export const DeleteUser = (id) =>{
    return (dispatch) => {
        Axios.delete(`/deleteUser/${id}`)
        .then(res => {
            const userData = res.data;
            dispatch({type: "Delete_User", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }  
}

//get Login User Detail action 
export const getUserDetailsUser = () => {
    
    return (dispatch) => {
        Axios.get(`/about`) 
        .then(res => {
            const userData = res.data;
            dispatch({type: "getUserDetails_User", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }
}

//Logout User action
export const LogoutUser = () => {
    return (dispatch) => {
        Axios.get(`/logout`)
        .then(res => {
            const userData = res.data;
            dispatch({type: "Logout_User", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }
}
