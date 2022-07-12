// import MaterialTable from '@material-ui/core'
import { useAuth0 } from "@auth0/auth0-react";
import axios from "./axios"

import { useEffect, useState } from "react";

const Profile =()=> {
  const {isAuthenticated,isLoading} = useAuth0();
  const [rooms,setRooms] =useState([])

 


  useEffect(()=>{
    axios.get('/api/rooms')
    .then(response => {
      setRooms(response.data)
    })
  },[]);

//   const columns = [
//     {title: "First Name" ,field: "first_Name"} 
    // {field: 'Last_Name', title: "Last Name"},
    // {field: 'Title', title: "Title"},
    // {field: 'Company_Name_for_Emails', title: "Company Email"},
    // {field: 'Email', title: "Email"},
    // {field: 'Email_Status', title: "Email Status"}, 
    // {field: 'Seniority', title: "Seniority"},
    // {field: 'Departments',title: "Departments"},
    // {field: 'Personal Phone', title: "Personal Phone"},
    // {field: 'Company_Phone', title: "Company Phone"},
    // {field: 'Employees', title: "Employees"},
    // {field: 'Industry', title: "Industry"},
    // {field: 'Person_Linkedin_Url', title: "Person Linkedin Url"}, 
    // {field: 'Website', title: "Website"},
    // {field: 'Company_Linkedin_Url', title: "Company Linkedin Url"},
    // {field: 'Company_Country', title: "Company Country"},
    // {field: 'Annual_Revenue', title: "Annual Revenue"}   

//   ]
if (isLoading) return 
    <h3>Wait for some time...</h3>
 

return (
  
    isAuthenticated && (
 <>  
    <div className="table">
    
      <table id="dtBasicExample" className="table table-striped table-bordered table-sm css-serial" width="100%">
      <thead>
        <tr>
          <th className="th-sm">First Name
          </th>
          <th className="th-sm">Last Name
          </th>
          <th className="th-sm">Title
          </th>
          <th className="th-sm">Company Name for Email
          </th>
          <th className="th-sm">Email
          </th>
          <th className="th-sm">Email Status
          </th>
          <th className="th-sm">Seniority
          </th>
          <th className="th-sm">Department
          </th>
          <th className="th-sm">Personal Phone
          </th>
          <th className="th-sm">Company Phone
          </th>
          <th className="th-sm">Employees
          </th>
          <th className="th-sm">Industry
          </th>
          <th className="th-sm">Person Linkedin Url
          </th>
          <th className="th-sm">Website
          </th>
          <th className="th-sm">Company Linkedin Url
          </th>
          <th className="th-sm">Company Country 
          </th>
          <th className="th-sm">Annual Revenue 
          </th>
        </tr>
      </thead>
      <tbody>
 
      {Array.isArray(rooms) ? rooms.map((room_data)=>(
        <tr>
          <td></td>
          <td>{room_data.first_Name}</td>
          {/* <td>{Room_Data.Last_Name}</td>
          <td>{Room_Data.Title}</td>
          <td>{Room_Data.Company_Name_for_Emails}</td>
          <td>{Room_Data.Email}</td>
          <td>{Room_Data.Email_Status}</td>
          <td>{Room_Data.Seniority}</td>
          <td>{Room_Data.Departments}</td>
          <td>{Room_Data.Personal_Phone}</td>
          <td>{Room_Data.Company_Phone}</td>
          <td>{Room_Data.Employees}</td>
          <td>{Room_Data.Industry}</td>
          <td>{Room_Data.Person_Linkedin_Url}</td>
          <td>{Room_Data.Website}</td>
          <td>{Room_Data.Company_Linkedin_Url}</td>
          <td>{Room_Data.Company_Country}</td>
          <td>{Room_Data.Annual_Revenue}</td> */}
        </tr>
         )):null}
        </tbody>
        </table>
    {/* <MaterialTable 
    // title="Material Table"
    //     data={data} 
    //     columns= {columns} 
    //     /> */}
   
    </div>
    </>
    )
  );
}  

export default Profile;
