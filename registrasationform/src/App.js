import React, { createContext, useReducer } from "react"; 
import "./App.css";
import Home from "./Components/Home";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Error404 from "./Components/Error";
import Register from "./Components/Register";
import Logout from './Components/Logout';
import ProtectedRoute from "./Components/ProtectedRoute";
import { Switch,Route, NavLink } from "react-router-dom";
import {Reducers, initialState} from './reducers/userReducers';

export const loginContext = createContext();

const App = () => {

    const [state, dispatch] = useReducer(Reducers, initialState)
    console.log("state: ", state)
    return (
        <> 

        <loginContext.Provider value = {state, dispatch}>

           <div className="nav_div">
                        
                <NavLink to = '/'> Home </NavLink>
       
                <NavLink to = '/Registration'>Registration</NavLink>
                 
                <NavLink to = '/Dashboard'>Dashboard</NavLink>
            
                <NavLink to = '/Logout'> Logout</NavLink> 
                
                <NavLink to = '/Login'> Login </NavLink>
                        
            </div>

            <hr/>  
                                         
            <Switch>
                <Route exact path = "/Registration" component={Register} />
                <Route exact path = "/editUser/:id" component={Register} />
                <Route exact path = "/" component={Home} />
                <ProtectedRoute exact path = "/Login" component={Login} authStatus={!state} />
                <ProtectedRoute exact path = "/Logout" component={Logout} authStatus={state}/>
                <ProtectedRoute exact path= "/Dashboard" component={Dashboard} authStatus={state}/>
                <Route component={Error404} />    
            </Switch> 
        </loginContext.Provider>    
        </>
    )
}

export default App;