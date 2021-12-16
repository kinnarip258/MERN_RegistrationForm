import React from "react";
import RegistrationForm from './Components/RegistrationForm'
import Home from "./Components/Home";
import Login from './Components/Login';
import Deshboard from './Components/Deshboard';
import Error404 from "./Components/404";
import "./App.css";
import { Switch,Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path = "/"><Home /></Route>
                <Route exact path = "/Registration"><RegistrationForm /></Route>
                <Route exact path = "/Login"><Login /></Route>
                <Route exact path = "/Deshboard"><Deshboard /></Route>
                <Route ><Error404 /></Route>
            </Switch>
        </>
    )
}



export default App;