import React from "react"; 
import Home from "./Components/Home";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Error404 from "./Components/404";
import Register from "./Components/Register";

import "./App.css";
import { Switch,Route } from "react-router-dom";

const App = () => {
    
    return (
        <>
            <Switch>
                <Route exact path = "/"><Home /></Route>
                <Route exact path = "/Registration"><Register /></Route>
                <Route exact path = "/editUser/:id"><Register /></Route>
                <Route exact path = "/Login"><Login /></Route> 
                <Route exact path = "/Dashboard"><Dashboard/></Route>
                <Route ><Error404 /></Route>
            </Switch>
        </>
    )
}



export default App;