import React from "react";
  
function Upload  () => {
  return (
    <>
   <h1>Nodejs Upload CSV file to MongoDB</h1>
   <form action="/" enctype="multipart/form-data" method="post">
        <input type="file" name="csv" ></input>
        <input type="submit" value="Upload Csv"></input>
    </form>
      </>  
  );
};  
export default Upload;