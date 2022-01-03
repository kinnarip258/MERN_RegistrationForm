import Axios from 'axios';

export const Register_User = Axios.post(`/signUp`);
export const Login_User = Axios.post(`/signIn`);
export const Logout_User = Axios.get(`/logout`);
export const getUserDetails_User = Axios.get(`/dashboard`);
export const Edit_User = Axios.get(`/editUser`);
export const Delete_User = Axios.delete(`/deleteUser`);
export const Save_Update = Axios.put(`/updateUser`);
