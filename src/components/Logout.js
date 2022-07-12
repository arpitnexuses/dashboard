import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import "./log.css"

const Logout =() => {
    const {logout} = useAuth0();
    return (
        <Button className="logout" variant="text" onClick={()=> logout}>Logout</Button>

        )
}
export default Logout;