import React, {useEffect, useContext} from 'react'
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import {loginContext} from '../App'

const Logout = () => {
    
    const dispatch = useContext(loginContext);

    const history = useHistory();
    useEffect(() => {
        //for logout
        Axios.get(`/logout`)
        .then(() => {
            dispatch({type: 'LoginUser', payload: false})
            history.push('/Login');
        })
        .catch(err => {
            console.log(err);
            history.push('/Login');
        })

    }, [])
    return(
        <>

        </>
    )
}

export default Logout
