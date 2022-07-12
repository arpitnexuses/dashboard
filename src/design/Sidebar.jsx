import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css"
import { Home, TableChart, Publish } from "@material-ui/icons"

export default function Sidebar(){
    return (
        <>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <h3 className="sidebar-Title">Dashboard</h3>
                    <ul className="sidebarList">
                        
                        {/* <Link to="/" > */}
                    <li className="sidebarListItem ">
                            <Home className="sidebarIcon"/>
                            Home
                        </li>
                        {/* </Link>
                        <Link to="/table" > */}
                        <li className="sidebarListItem">
                            <TableChart className="sidebarIcon"/>
                            Table
                        </li>
                        {/* </Link>
                        <Link to="/upload" > */}

                        <li className="sidebarListItem">
                        <Publish className="sidebarIcon"/>
                            Upload
                        </li>
                        {/* </Link> */}
                    </ul>
                    </div>
                    
                </div>
            </div>
            </>
            
    )
}