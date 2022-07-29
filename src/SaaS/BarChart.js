import React, { Component } from 'react';
import RoboChart from '@postlight/react-google-sheet-to-chart';
import "./barchart.css"
import PieChart from './PieChart';
import PieChart2 from './PieChart2';


class BarChart extends Component {
  render() {
    return (
        <>
        <div className="barchar">
      <div className="spanbar">
      <strong id="namee" style={{textALign: 'center', alignContent: 'center', alignItems: 'center'}}>Total Drip</strong>
        <RoboChart
          id="1guKN3VTfma70sERuLUJK6P5iHxra1CrZ88a6WdkY-QU"
          sheet="Total_Drip"
          token="AIzaSyCuC0PFPzaa03o8Vmh_r9uPW0AD7TNZypw"
          title="Total Drip"
          type="horizontalBar"
         
          colors={['#3B999B', '#EE5873', '#5778A3']}
        /></div>
        <span><PieChart/>
      </span>
      
      </div>
      
      
      </>
    );
  }
}
export default BarChart;