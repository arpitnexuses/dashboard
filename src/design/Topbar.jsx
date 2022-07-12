import React from 'react';
import "./Topbar.css"

import Login from '../components/Login';
import Logout from '../components/Logout';
function Topbar (){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
            <div className="logo">
                Demopage 
            </div>
            <div className="topright">
                <div className="topbarLoginCont">
                    <div className="login">
                        <Login/>
                        </div>
                    <div className="logout">
                        <Logout/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Topbar; 