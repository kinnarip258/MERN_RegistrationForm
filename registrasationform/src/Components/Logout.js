import React, {useEffect} from 'react'
import Axios from "axios";
import { useHistory } from 'react-router-dom';


const Logout = () => {

    const history = useHistory();
    useEffect(() => {
        Axios.get(`/logout`)
        .then(() => {
            window.document.location('/Login');
        })
        .catch(err => {
            console.log(err);
            history.push('/Login')
        })
    }, [])
    return (
        <>
        </>
    )
}

export default Logout
