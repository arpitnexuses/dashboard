import React from "react"; 
import "./Demo.css"


const Demo = () => {
  return (
    <>
  <title>
    React App
  </title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <div className="App">
  <div>
  <h1 className="head">Node js upload CSV file to Mongodb database</h1>
  <form className="form-csvs" action="/upload" method="post" encType="multipart/form-data" >
    <input className="form-csv" type="file" name="csvFile" />
    <input className="form-csv" type="submit" defaultValue="Upload" />
  </form>
  </div>
  </div>
</>
  )
}
export default Demo

