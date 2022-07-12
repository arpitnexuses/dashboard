import React from "react"; 


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
  <h2>Node js upload CSV file to Mongodb database</h2>
  <form action="/upload" method="post" encType="multipart/form-data" >
    <input type="file" name="csvFile" />
    <input type="submit" defaultValue="Upload" />
  </form>
  </div>
  </div>
</>
  )
}
export default Demo

