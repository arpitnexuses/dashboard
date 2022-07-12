import {useAuth0} from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import "./log.css"

const Login = () =>{
    const {loginWithRedirect} = useAuth0(); 
    return (
        <Button className="login" variant="text" onClick={()=> loginWithRedirect()}>Login</Button>

    )
}
export default Login;