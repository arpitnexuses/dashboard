import axios from './axios';
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import "./Table.css"



function App() {
  const [search, setSearch] = useState([])
  const [room,setRoom] =useState([])
  const [filterRoom,setFilterRoom] = useState([])

  useEffect(()=>{
    axios.get('/room')
    .then(response => {
      setRoom(response.data)
      setFilterRoom(response.data)
    })
  },[]);

  console.log('Room_Data', room);

  const columns = [
    {name: "First Name", selector:(room)=>room.first_Name, sortable: true } ,
    {name: "Last Name", selector:(room)=>room.Last_Name},
    {name: "Title", selector: (room)=>room.Title, sortable: true},
    {name: "Company Email", selector:(room)=>room.Company_Name_for_Emails},
    {name: "Email", selector: (room)=>room.Email},
    {name: "Email Status", selector: (room)=>room.Email_Status}, 
    {name: "Seniority", selector: (room)=>room.Seniority, sortable: true},
    {name: "Departments", selector: (room)=>room.Departments},
    {name: "Personal Phone", selector: (room)=>room.PersonalPhone},
    {name: "Company Phone", selector: (room)=>room.Company_Phone},
    {name: "Employees", selector: (room)=>room.Employees},
    {name: "Industry", selector: (room)=>room.Industry,sortable: true},
    {name: "Person Linkedin Url", selector:(room)=>room.Person_Linkedin_Url}, 
    {name: "Website", selector: (room)=>room.Website},
    {name: "Company Linkedin Url", selector:(room)=>room.Company_Linkedin_Url},
    {name: "Company Country", selector: (room)=>room.Company_Country,sortable: true},
    {name: "Annual Revenue", selector: (room)=>room.Annual_Revenue}   

  ]
  useEffect(()=>{
    const result= room.filter(rooms => {
      return (rooms.Company_Country,rooms.first_Name.toLowerCase().match(search.toLowerCase())
       )
       return (rooms.Company_Country,rooms.first_Name.toLowerCase().match(search.toLowerCase())
       )
    },
    
    )
    setFilterRoom(result);
  },[search])
  return (
    <div className="Data">
    <DataTable 
    columns={columns} 
    data={filterRoom}
    pagination
    paginationAlign="bottom"
    selectableRows 
    fixedHeader
    fixedHeaderScrollHeight='490px'
    highlightOnHover
    subHeader
    subHeaderAlign='right'
    subHeaderComponent={
      <input type="text" 
      placeholder="Search Here" 
      className="search-field"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      }
      />
    </div>
//     <div className="App">
    
//       <table id="dtBasicExample" className="table table-striped table-bordered table-sm css-serial" cellSpacing="0" width="100%">
//       <thead>
//         <tr>
//         <th className="th-sm">ID
//           </th>
//           <th className="th-sm">First Name
//           </th>
//           <th className="th-sm">Last Name
//           </th>
//           <th className="th-sm">Title
//           </th>
//           <th className="th-sm">Company Name for Email
//           </th>
//           <th className="th-sm">Email
//           </th>
//           <th className="th-sm">Email Status
//           </th>
//           <th className="th-sm">Seniority
//           </th>
//           <th className="th-sm">Department
//           </th>
//           <th className="th-sm">Personal Phone
//           </th>
//           <th className="th-sm">Company Phone
//           </th>
//           <th className="th-sm">Employees
//           </th>
//           <th className="th-sm">Industry
//           </th>
//           <th className="th-sm">Person Linkedin Url
//           </th>
//           <th className="th-sm">Website
//           </th>
//           <th className="th-sm">Company Linkedin Url
//           </th>
//           <th className="th-sm">Company Country 
//           </th>
//           <th className="th-sm">Annual Revenue 
//           </th>
//         </tr>
//       </thead>
//       <tbody>
// {room.map((Room_Data)=>(
//         <tr>
//           <td></td>
//           <td>{Room_Data.first_Name}</td>
//           <td>{Room_Data.Last_Name}</td>
//           <td>{Room_Data.Title}</td>
//           <td>{Room_Data.Company_Name_for_Emails}</td>
//           <td>{Room_Data.Email}</td>
//           <td>{Room_Data.Email_Status}</td>
//           <td>{Room_Data.Seniority}</td>
//           <td>{Room_Data.Departments}</td>
//           <td>{Room_Data.Personal_Phone}</td>
//           <td>{Room_Data.Company_Phone}</td>
//           <td>{Room_Data.Employees}</td>
//           <td>{Room_Data.Industry}</td>
//           <td>{Room_Data.Person_Linkedin_Url}</td>
//           <td>{Room_Data.Website}</td>
//           <td>{Room_Data.Company_Linkedin_Url}</td>
//           <td>{Room_Data.Company_Country}</td>
//           <td>{Room_Data.Annual_Revenue}</td>
//         </tr>
       
//          ))
//       }
//         </tbody>
//         </table>
//     </div>
    )
      };


export default App;
