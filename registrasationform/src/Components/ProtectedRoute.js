import React from 'react'
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({authStatus, component: Component, ...rest}) => {

    return (
        <>
           <Route {...rest} render= {(props) => {
               if(authStatus) return <Component {...props}/>;
               if(!authStatus) return <Redirect to= {{path:'/', state: {from: props.location}}} />;
           }}/> 
        </>
    )
}

export default ProtectedRoute;
