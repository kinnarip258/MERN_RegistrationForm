import React, {useEffect, useContext} from 'react'
import Axios from "axios";
import { useHistory } from 'react-router-dom';

const Logout = () => {
    
    const history = useHistory();
    useEffect(() => {
        //for logout
        Axios.get(`/logout`)
        .then(() => {
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
