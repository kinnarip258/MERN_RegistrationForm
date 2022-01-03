import React, { createContext, useReducer } from "react"; 
import "./App.css";
import AppRouters from "./router/appRouters";
import store from './store';
import { Provider } from "react-redux";

const App = () => {
    
    store.subscribe(() => console.log(store.getState()));
    return (
        <>  
            <Provider store= {store}>
                <AppRouters/> 
            </Provider>
             
        </>
    )
}



export default App;