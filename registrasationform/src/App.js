import React, { createContext, useReducer } from "react"; 
import "./App.css";
import AppRouters from "./router/appRouters";
import store from './store';
import { Provider } from "react-redux";
import { initialState, Reducers } from "./reducers/userReducers";

export const userContext = createContext();

const App = () => {
    
    store.subscribe(() => console.log(store.getState()));
    const [state, dispatch] = useReducer(Reducers, initialState);
    
    return (
        <>  
            <userContext.Provider value={state, dispatch}>
                <Provider store= {store}>
                    <AppRouters/> 
                </Provider>
            </userContext.Provider>
             
        </>
    )
}

export default App;