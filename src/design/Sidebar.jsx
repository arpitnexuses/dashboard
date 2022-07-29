import React from 'react';

import "./Sidebar.css"
import { Home, TableChart, Publish,Dashboard } from "@material-ui/icons"

export default function Sidebar(){
    return (
        <>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <h3 className="sidebar-Title">Dashboard</h3>
                    <ul className="sidebarList">
                        
                    <a href="/"> 
                    <li className="sidebarListItem ">
                            <Home className="sidebarIcon"/>
                            Home
                        </li>
                        </a>
                        <a href="/table">  
                        <li className="sidebarListItem">
                            <TableChart className="sidebarIcon"/>
                            Table
                        </li>
                        </a>
                        <a href="/upload"> 

                        <li className="sidebarListItem">
                        <Publish className="sidebarIcon"/>
                            Upload
                        </li>
                        </a>
                        <a href="/dashboard">
                        <li className="sidebarListItem">
                        <Dashboard className="sidebarIcon"/>
                            Dashboard
                        </li>
                        </a>

                    </ul>
                    </div>
                    
                </div>
            </div>
            </>
            
    )
}