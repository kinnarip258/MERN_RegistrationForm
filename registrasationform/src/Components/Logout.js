import React, {useEffect, useContext} from 'react'
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import { userContext } from '../App';
const Logout = () => {
    
    //for login-logout
    const {state, dispatch} = useContext(userContext);
    const history = useHistory();
    useEffect(() => {
        //for logout
        Axios.get(`/logout`)
        .then(() => {
            dispatch({type: 'User', payload: true})
            history.push('/Login');
        })
        .catch(err => {
            console.log(err);
            history.push('/Login');
        })

    }, [])
    return (
        <>
        </>
    )
}

export default Logout
