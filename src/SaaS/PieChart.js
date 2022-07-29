import React, { Component } from 'react';
import RoboChart from '@postlight/react-google-sheet-to-chart';
import "./barchart.css"


class PieChart extends Component {
  render() {
    return (
        <>
      <div className="piechart">
        <RoboChart
          id="1guKN3VTfma70sERuLUJK6P5iHxra1CrZ88a6WdkY-QU"
          sheet="Sheet9"
          token="AIzaSyCuC0PFPzaa03o8Vmh_r9uPW0AD7TNZypw"
          type="doughnut"
          title="Website Traffic"
          colors={[ '#EF885D', '#6B2D70']}
        />
      </div>
      
      </>
    );
  }
}
export default PieChart;