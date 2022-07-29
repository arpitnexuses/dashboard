import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import Topbar from './design/Topbar';
import Sidebar from './design/Sidebar';
import Home from './pages/Home';
import Table from './pages/Table';
import Upload from './pages/Upload';
import Fusion from '../src/SaaS/Fusion'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Apps from './SaaS/Apps';


function App() {

  return (
    <>
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/table" element={<Table/>} ></Route>
          <Route path="/upload" element={<Upload/>} ></Route>        
          <Route path="/dashboard" element={<Apps/>} ></Route>
          </Routes>
    </Router>
    </div>
  
    </div>
    </>
  );
}

export default App;
