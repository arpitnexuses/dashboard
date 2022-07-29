import React from 'react';
import "./Topbar.css"

import Login from '../components/Login';
import Logout from '../components/Logout';
// import { useAuth0 } from '@auth0/auth0-react';
function Topbar (){
    // const {isAuthenticated} = useAuth0()
    return (
        <div className="topbar">
            <div className="topbarWrapper">
            <div className="logo">
                Demopage 
            </div>
            <div className="topright">
                <div className="topbarLoginCont">
                    {/* {isAuthenticated ? */}
                     <div className="login">
                        <Login/>
                        </div>
                       
                    
                    <div className="logout">
                        <Logout/>
                    </div>
{/* } */}
                </div>
            </div>
            </div>
        </div>
    )
}
export default Topbar; 