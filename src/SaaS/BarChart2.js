import React, { Component } from 'react';
import RoboChart from '@postlight/react-google-sheet-to-chart';
import "./barchart.css"
import PieChart2 from './PieChart2'

const style = { width: '900px', margin: '0 auto' };
class BarChart2 extends Component {
  render() {
    return (
        <>
        <div className="secondcol">
        <span><PieChart2/></span>
        <div className="barchar2">
        <RoboChart
        id="1guKN3VTfma70sERuLUJK6P5iHxra1CrZ88a6WdkY-QU"
        sheet="Sheet7"
        token="AIzaSyCmXayBXIrZRsuIZTKiMXgKwlDrfHxzGTg"
        type="bar"
        title="Outreach 1-1"
        colors={['#2E424D', '#5BB291', '#98DAD9']}
      />
    </div>
    </div>
    </>
  );
}
}
export default BarChart2;