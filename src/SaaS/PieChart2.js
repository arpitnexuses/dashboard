import React, { Component } from 'react';
import RoboChart from '@postlight/react-google-sheet-to-chart';
import "./barchart.css"


function PieChart2 () {
  
    return (
        <>
      <div className="piechart2">
        <RoboChart
          id="1guKN3VTfma70sERuLUJK6P5iHxra1CrZ88a6WdkY-QU"
          sheet="Sheet10"
          token="AIzaSyCuC0PFPzaa03o8Vmh_r9uPW0AD7TNZypw"
          type="pie"
          title="Website Geo Traffic"
          colors={[ '#EE5873', '#EF885D', '#6B2D70','#3B999B', '#5778A3']}
        />
      </div>
      
      </>
    );
  
}
export default PieChart2;