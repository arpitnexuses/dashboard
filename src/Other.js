import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import Login from "./components/Login"
import Logout from "./components/Logout"
import Profile from './components/Profile';
import Demo from './fileupload/views/Demo';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import DashboardHome from './dashboard_home';
import Topbar from './design/Topbar';
import Sidebar from './design/Sidebar';



function Other() {

const {isAuthenticated} = useAuth0(); 
  return (
    <>
    <Topbar/>
    <Sidebar/>
    
    <div className="App">
    <div className="other">
      <h1>Dashboard</h1>
      <span><Login/>
        <Logout/></span>
        {isAuthenticated && (
        <Router>
      <Routes>
          <Route path="/" element={<DashboardHome/>} ></Route>
          <Route path="/upload" element={<Demo/>} ></Route>
          <Route path="/profile" element={<Profile/>} ></Route>        
          </Routes>
    </Router>
        )}
        </div>
    </div>
    </>
  );
}

export default Other;
