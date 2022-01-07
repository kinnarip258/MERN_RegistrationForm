const initialState = {
    user: [],
    LoginState: false
}

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
                LoginState: true,    
            }

        case "Edit_User":
            
            return {
                ...state,
                user: action.payload
            }

        case "Delete_User":
            
            return  {
                ...state,
                LoginState: false,     
            }

        case "getUserDetails_User":
        
            return {
                ...state,
                user: action.payload
            }

        case "Logout_User":
            
            return {
                ...state, 
                LoginState: false ,   
            }

        default:
            return state;
    }
}

export default ApiReducers;