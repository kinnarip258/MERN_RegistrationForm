import React, {useEffect} from 'react'
import Axios from "axios";
import { useHistory } from 'react-router-dom';


const Logout = () => {

    const history = useHistory();
    useEffect(() => {
        Axios.get(`/logout`)
        .catch(err => {
            console.log(err);
            history.push('/Login');
        })
    }, [])
    return (
        <>
            {/* <h1>Logout Page</h1> */}
        </>
    )
}

export default Logout
