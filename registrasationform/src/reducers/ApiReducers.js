
const initialState = {
    user: [],
    LoginState: false 
}
console.log("token ", initialState.user.Tokens)
console.log("cookie ", document.cookie)
const ApiReducers = (state = initialState, action) => {
    switch (action.type) {

        case "Register_User":

            return {
                ...state,
            }

        case "Save_Update": 
            
            return {
                ...state,
                user: action.payload
            }

        case "Login_User":
            
            return {
                ...state,
                user: action.payload,
                LoginState: true   
            }

        case "Edit_User":
            
            return {
                ...state,
                user: action.payload
            }

        case "Delete_User":
            
            return  {
                ...state,   
            }

        case "getUserDetails_User":
        
            return {
                ...state,
                user: action.payload,
                LoginState: true
            }

        case "Logout_User":
            
            return {
                ...state, 
                LoginState: false
            }

        default:
            return state;
    }
}

export default ApiReducers;