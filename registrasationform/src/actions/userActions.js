
import * as api from '../api/index';

export const Register_User = (values) => async (dispatch) =>{
    try{
        const {response} = await api.Register_User(values);
        dispatch({ type: Register_User, payload: response})
    }
    catch(err){
        console.log(err);
    }
}
export const Save_Update = (id,values) => async (dispatch) =>{
    try{
        const {response} = await api.Save_Update(id, values);
        dispatch({ type: Save_Update, payload: response})
    }
    catch(err){
        console.log(err);
    }
            
}
export const Login_User = (values) => async (dispatch) =>{
    try{
        const {response} = await api.Login_User(values);
        dispatch({ type: Login_User, payload: response})
    }
    catch(err){
        console.log(err);
    }
}

export const Edit_User = (id, values) => async (dispatch) =>{
    try{
        const {response} = await api.Edit_User(id, values);
        dispatch({ type: Edit_User, payload: response})
    }
    catch(err){
        console.log(err);
    }
}
export const Delete_User = (id) => async (dispatch) =>{
    try{
        const {response} = await api.Delete_User(id);
        dispatch({ type: Delete_User, payload: response})
    }
    catch(err){
        console.log(err);
    }
}

export const getUserDetails_User = () => async (dispatch) =>{
    try{
        const {response} = await api.getUserDetails_User();
        dispatch({ type: getUserDetails_User, payload: response})
    }
    catch(err){
        console.log(err);
    }
}

export const Logout_User =  () => async (dispatch) =>{
    try{
        const {response} = await api.Logout_User();
        dispatch({ type: Logout_User, payload: response})
    }
    catch(err){
        console.log(err);
    }
}