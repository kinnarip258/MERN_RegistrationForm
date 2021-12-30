import React, {useEffect} from 'react'
import Axios from "axios";
import { useHistory } from 'react-router-dom';


const Logout = () => {

    const history = useHistory();
    useEffect(() => {
        Axios.get(`/logout`)
        .then(() => {
            history.push('/Login');
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <>
            <h1 style={{"textAlign": "center"}}>Logout Page</h1>
        </>
    )
}

export default Logout
