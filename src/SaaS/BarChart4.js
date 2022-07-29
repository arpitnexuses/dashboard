import React, { Component } from 'react';
import RoboChart from '@postlight/react-google-sheet-to-chart';
import "./barchart.css"


const style = { width: '900px', margin: '0 auto' };
class BarChart3 extends Component {
  render() {
    return (
        <>
        
        
        <div className="barchar4">
        <RoboChart
        id="1guKN3VTfma70sERuLUJK6P5iHxra1CrZ88a6WdkY-QU"
        sheet="Sheet4"
        token="AIzaSyCuC0PFPzaa03o8Vmh_r9uPW0AD7TNZypw"
        type="line"
        title="Pipeline"
        colors={['#298DAD','#98D322']}
      />
    </div>
   
    </>
  );
}
}
export default BarChart3;