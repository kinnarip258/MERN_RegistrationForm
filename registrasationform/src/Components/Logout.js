import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {LogoutUser} from "../actions/userActions"


const Logout = () => {
    
    //dispatch the api request
    const ApiDispatch = useDispatch();

    useEffect(() => {
        //dispatch logout request
        ApiDispatch(LogoutUser());

    }, [])

    return(
        <>
        </>
    )
}

export default Logout;
