// import MaterialTable from '@material-ui/core'
// import { useAuth0 } from "@auth0/auth0-react";
import axios from "../components/axios"


import { useEffect, useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


function Table() {
  const [room,setRoom] =useState([])
  const columns = [
    {dataField: 'first_Name', text: "First Name"} ,
    {dataField: 'Last_Name', text: "Last Name"},
    {dataField: 'Title', text: "Title"},
    {dataField: 'Company_Name_for_Emails', text: "Company Email"},
    {dataField: 'Email', text: "Email"},
    {dataField: 'Email_Status', text: "Email Status"}, 
    {dataField: 'Seniority', text: "Seniority"},
    {dataField: 'Departments',text: "Departments"},
    {dataField: 'Personal Phone', text: "Personal Phone"},
    {dataField: 'Company_Phone', text: "Company Phone"},
    {dataField: 'Employees', text: "Employees"},
    {dataField: 'Industry', text: "Industry"},
    {dataField: 'Person_Linkedin_Url', text: "Person Linkedin Url"}, 
    {dataField: 'Website', text: "Website"},
    {dataField: 'Company_Linkedin_Url', text: "Company Linkedin Url"},
    {dataField: 'Company_Country', text: "Company Country"},
    {dataField: 'Annual_Revenue', text: "Annual Revenue"}   

  ]


  useEffect(()=>{
    axios.get('/room')
    .then(response => {
      setRoom(response.data)
    })
  },[]);

  console.log('Room_Data', room);
  
  
  
  

  return (
    <>
    <div className="App">
     



    
    <BootstrapTable 
      keyField="First_Name" 
      data={room} 
      columns= {columns} 
      pagination={paginationFactory()}
      fixedHeader
      fixedHeaderScrollHeight = "300px"
    />
    </div>
    </>
  );
}  

export default Table;
