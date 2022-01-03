import {Register_User, Save_Update, Login_User, Edit_User,Delete_User, getUserDetails_User,Logout_User } from '../actions/index';

const ApiReducers = (state = [], action) => {
    switch (action.type) {
        case Register_User:
            return action.payload

        case Save_Update: 
            return action.payload

        case Login_User:
            return action.payload
        case Edit_User:
            return state.find((ele) => ele._id === action.payload._id ? action.payload : ele)

        case Delete_User:
            return state.filter((ele) => ele._id === action.payload._id ? action.payload : ele)

        case getUserDetails_User:
            return action.payload

        case Logout_User:
            return action.payload

        default:
            return state;
    }
}

export default ApiReducers;