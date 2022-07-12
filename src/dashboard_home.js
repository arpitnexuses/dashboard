import React from 'react'
import { Link } from "react-router-dom";
const DashboardHome =() =>{
  return (
    <>
 
    
        <div>
          <Link to="/">Dashboard Home</Link>
        <br/>
        
          <Link to="/upload">Upload</Link>
        
        <br/>
          <Link to="/profile">Profile</Link>
          </div>

    </>
  )
}
export default DashboardHome