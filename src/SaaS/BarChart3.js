import React, { Component } from 'react';
import RoboChart from '@postlight/react-google-sheet-to-chart';
import "./barchart.css"
import BarChart4 from './BarChart4'

const style = { width: '900px', margin: '0 auto' };
class BarChart3 extends Component {
  render() {
    return (
        <>
        <div className="secondcol">
        
        <div className="barchar3">
            <strong id="namee" style={{textALign: 'center', alignContent: 'center', alignItems: 'center'}}>Linkdin</strong>
        <RoboChart
        id="1guKN3VTfma70sERuLUJK6P5iHxra1CrZ88a6WdkY-QU"
        sheet="Sheet3"
        token="AIzaSyCmXayBXIrZRsuIZTKiMXgKwlDrfHxzGTg"
        type="horizontalBar"
        title="Linkdin"
        colors={['#3B999B', '#EE5873']}
      />
    </div>
    <span><BarChart4/></span>
    </div>
    </>
  );
}
}
export default BarChart3;