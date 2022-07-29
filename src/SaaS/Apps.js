import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import config from './config';
import chartCosmetics from './chartCosmetics';
import 'bulma/css/bulma.min.css';
import './Apps.css';
import BarChart from './BarChart.js';
import BarChart2 from './BarChart2';
import BarChart3 from './BarChart3';

// ReactFC.fcRoot(FusionCharts, Charts);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${ config.spreadsheetId }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${ config.apiKey }`;

function formatNum(num) {
    let si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "K" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
      ];
      let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      let i;
      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
          break;
        }
      }
      return (num / si[i].value).toFixed(2).replace(rx, "$1") + si[i].symbol;
  }; 

class Apps extends Component {
  constructor() {
    super();
    this.state = {
     items:[], mrrChartData: null, nrChartData: null, mrrGrowthChartData: null, arpuChartData: null, cacChartData: null, ltvChartData: null
    };
  }

  getData = (arg) => {
      // google sheet data
      const arr =this.state.items;
      const arrLen = arr.length;
      
      // kpi cards
      // renewed users
      let emailSendVal = 0;
      let prevEmailSendVal = 0;
      let emailSendChangeper = 0;
      const emailSendChangeperElem = document.getElementById('email-send-changeper');
      emailSendChangeperElem.classList.remove('has-up-val');
      emailSendChangeperElem.classList.remove('has-down-val');

      // new users
      let emailOpenVal = 0;
      let prevEmailOpenVal = 0;
      let emailOpenChangeper = 0;
      const emailOpenChangeperElem = document.getElementById('email-open-changeper');
      emailOpenChangeperElem.classList.remove('has-up-val');
      emailOpenChangeperElem.classList.remove('has-down-val');

    //   churned users
      let emailClickVal = 0;
      let prevEmailClickVal = 0;
      let emailClickChangeper = 0;
      const emailClickChangeperElem = document.getElementById('email-click-changeper');
     emailClickChangeperElem.classList.remove('has-up-val');
      emailClickChangeperElem.classList.remove('has-down-val');

    //   // arr
    //   let arrVal = 0;
    //   let prevArrVal = 0;
    //   let arrChangeper = 0;
    //   const arrChangeperElem = document.getElementById('arr-changeper');
    //   arrChangeperElem.classList.remove('has-up-val');
    //   arrChangeperElem.classList.remove('has-down-val');

    //   // chart cards
    //   let chartDataArr = [];
      
    //   // chart 1 => MRR
    //   let mrrChangeper = 0;
    //   const mrrChangeperElem = document.getElementById('mrr-changeper');
    //   mrrChangeperElem.classList.remove('has-up-val');
    //   mrrChangeperElem.classList.remove('has-down-val');

    //   // chart 2 => NR
    //   let nrChangeper = 0;
    //   const nrChangeperElem = document.getElementById('nr-changeper');
    //   nrChangeperElem.classList.remove('has-up-val');
    //   nrChangeperElem.classList.remove('has-down-val');

    //   // chart 3 => MRR Growth
    //   let mrrGrowthChangeper = 0;
    //   const mrrGrowthChangeperElem = document.getElementById('mrr-growth-changeper');
    //   mrrGrowthChangeperElem.classList.remove('has-up-val');
    //   mrrGrowthChangeperElem.classList.remove('has-down-val');

    //   // chart 4 => ARPU Chart
    //   let arpuChangeper = 0;
    //   const arpuChangeperElem = document.getElementById('arpu-changeper');
    //   arpuChangeperElem.classList.remove('has-up-val');
    //   arpuChangeperElem.classList.remove('has-down-val');

    //   // chart 5 => CAC Chart
    //   let cacChangeper = 0;
    //   const cacChangeperElem = document.getElementById('cac-changeper');
    //   cacChangeperElem.classList.remove('has-up-val');
    //   cacChangeperElem.classList.remove('has-down-val');

    //   // chart 6 => LTV Chart
    //   let ltvChangeper = 0;
    //   const ltvChangeperElem = document.getElementById('ltv-changeper');
    //   ltvChangeperElem.classList.remove('has-up-val');
    //   ltvChangeperElem.classList.remove('has-down-val');
      
      for(let i=0; i<arrLen; i++) {
          let weeksStr = (arr[i])['weeks'];
          if(weeksStr.includes(arg)) {
            emailSendVal += parseInt(arr[i].email_send);
            emailOpenVal += parseInt(arr[i].email_open);
            emailClickVal += parseInt(arr[i].email_click);
            // arrVal += parseFloat(arr[i].gross_revenue);
            // chartDataArr.push(arr[i]);
          } else if(weeksStr.includes((parseInt(arg)-1))) {
            prevEmailSendVal += parseInt(arr[i].email_send);
            prevEmailOpenVal += parseInt(arr[i].email_open);
            prevEmailClickVal += parseInt(arr[i].email_click);
            // prevArrVal += parseFloat(arr[i].gross_revenue);
          } 
      }

    // let chartDataArrLen = chartDataArr.length;
    
    // // mrr-chart
    // let mrrChartDataArr = [];
    // let mrrChartCatArr = [];
    // for (let i=0; i<chartDataArrLen; i++) {
    //     mrrChartCatArr.push({label: chartDataArr[i].month});
    //     mrrChartDataArr.push({value: chartDataArr[i].gross_revenue});
    // }
    
    // const mrrChartConfig = {
    // type: "mscombi2d",
    // width: "100%",
    // height: "100%",
    // dataFormat: "json",
    // dataSource: {
    //     chart: chartCosmetics.currencyChart,
    //     categories: [{
    //         category: mrrChartCatArr
    //     }],
    //     dataset: [
    //         {
    //             renderAs: "spline",
    //             lineThickness: "3",
    //             alpha: "50",
    //             data: mrrChartDataArr
    //             }, {
    //                 renderAs: "splinearea",
    //                 showPlotBorder: "0",
    //                 plotToolText: " ",
    //                 data: mrrChartDataArr
    //             }
    //         ]
    //     }
    // };

    // this.setState({mrrChartData: mrrChartConfig});

    // // nr-chart
    // let nrChartDataArr = [];
    // let nrChartCatArr = [];
    // for (let i=0; i<chartDataArrLen; i++) {
    //     nrChartCatArr.push({ label: chartDataArr[i].month });
    //     nrChartDataArr.push({ value: chartDataArr[i].net_revenue});
    // }

    // const nrChartConfig = {
    //     type: "mscombi2d",
    //     width: "100%",
    //     height: "100%",
    //     dataFormat: "json",
    //     dataSource: {
    //         chart: chartCosmetics.currencyChart,
    //         categories: [{
    //             category: nrChartCatArr
    //         }],
    //         dataset: [
    //             {
    //                 renderAs: "spline",
    //                 lineThickness: "3",
    //                 alpha: "50",
    //                 data: nrChartDataArr
    //                 }, {
    //                     renderAs: "splinearea",
    //                     showPlotBorder: "0",
    //                     plotToolText: " ",
    //                     data: nrChartDataArr
    //                 }
    //             ]
    //         }
    //     };

    // this.setState({ nrChartData: nrChartConfig });

    // // mrr-growth chart
    // let mrrGrowthChartDataArr = [];
    // let mrrGrowthChartCatArr = [];
    // for(let i=0; i<chartDataArrLen; i++) {
    //     mrrGrowthChartCatArr.push({ label: chartDataArr[i].month });
    //     mrrGrowthChartDataArr.push({ value: chartDataArr[i].mrr_growth });
    // }

    // const mrrGrowthChartConfig = {
    //     type: "mscombi2d",
    //     width: "100%",
    //     height: "100%",
    //     dataFormat: "json",
    //     dataSource: {
    //         chart: chartCosmetics.percentChart,
    //         categories: [{
    //             category: mrrGrowthChartCatArr
    //         }],
    //         dataset: [
    //             {
    //                 renderAs: "spline",
    //                 lineThickness: "3",
    //                 alpha: "50",
    //                 data: mrrGrowthChartDataArr
    //                 }, {
    //                     renderAs: "splinearea",
    //                     showPlotBorder: "0",
    //                     plotToolText: " ",
    //                     data: mrrGrowthChartDataArr
    //                 }
    //             ]
    //         }
    //     };

    // this.setState({ mrrGrowthChartData: mrrGrowthChartConfig });

    // // arpu chart
    // let arpuChartDataArr = [];
    // let arpuChartCatArr = [];
    // for(let i=0; i<chartDataArrLen; i++) {
    //     arpuChartCatArr.push({ label: chartDataArr[i].month });
    //     arpuChartDataArr.push({ value: chartDataArr[i].arpu });
    // }

    // const arpuChartConfig = {
    //     type: "mscombi2d",
    //     width: "100%",
    //     height: "100%",
    //     dataFormat: "json",
    //     dataSource: {
    //         chart: chartCosmetics.currencyChart,
    //         categories: [{
    //             category: arpuChartCatArr
    //         }],
    //         dataset: [
    //             {
    //                 renderAs: "spline",
    //                 lineThickness: "3",
    //                 alpha: "50",
    //                 data: arpuChartDataArr
    //                 }, {
    //                     renderAs: "splinearea",
    //                     showPlotBorder: "0",
    //                     plotToolText: " ",
    //                     data: arpuChartDataArr
    //                 }
    //             ]
    //         }
    //     };

    // this.setState({ arpuChartData: arpuChartConfig });

    // // cac chart
    // let cacChartDataArr = [];
    // let cacChartCatArr = [];
    // for(let i=0; i<chartDataArrLen; i++) {
    //     cacChartCatArr.push({ label: chartDataArr[i].month });
    //     cacChartDataArr.push({ value: chartDataArr[i].cac });
    // }  

    // const cacChartConfig = {
    //     type: "mscombi2d",
    //     width: "100%",
    //     height: "100%",
    //     dataFormat: "json",
    //     dataSource: {
    //         chart: chartCosmetics.currencyChart,
    //         categories: [{
    //             category: cacChartCatArr
    //         }],
    //         dataset: [
    //             {
    //                 renderAs: "spline",
    //                 lineThickness: "3",
    //                 alpha: "50",
    //                 data: cacChartDataArr
    //                 }, {
    //                     renderAs: "splinearea",
    //                     showPlotBorder: "0",
    //                     plotToolText: " ",
    //                     data: cacChartDataArr
    //                 }
    //             ]
    //         }
    //     };

    // this.setState({ cacChartData: cacChartConfig });

    // // ltv chart
    // let ltvChartDataArr = [];
    // let ltvChartCatArr = [];
    // for(let i=0; i<chartDataArrLen; i++) {
    //     ltvChartCatArr.push({ label: chartDataArr[i].month });
    //     ltvChartDataArr.push({ value: chartDataArr[i].ltv });
    // }  

    // const ltvChartConfig = {
    //     type: "mscombi2d",
    //     width: "100%",
    //     height: "100%",
    //     dataFormat: "json",
    //     dataSource: {
    //         chart: chartCosmetics.currencyChart,
    //         categories: [{
    //             category: ltvChartCatArr
    //         }],
    //         dataset: [
    //             {
    //                 renderAs: "spline",
    //                 lineThickness: "3",
    //                 alpha: "50",
    //                 data: ltvChartDataArr
    //                 }, {
    //                     renderAs: "splinearea",
    //                     showPlotBorder: "0",
    //                     plotToolText: " ",
    //                     data: ltvChartDataArr
    //                 }
    //             ]
    //         }
    //     };

    // this.setState({ ltvChartData: ltvChartConfig });

    // feeding kpi card values and chart kpi tickers
    document.getElementById('email-send-val').innerHTML = formatNum(emailSendVal);
    document.getElementById('email-open-val').innerHTML = formatNum(emailOpenVal);
    document.getElementById('email-click-val').innerHTML = formatNum(emailClickVal);
    // document.getElementById('arr-val').innerHTML = `$${ formatNum(arrVal) }`;
    // document.getElementById('mrr-val').innerHTML = `$${ formatNum(chartDataArr[chartDataArrLen-1].gross_revenue) }`;
    // document.getElementById('nr-val').innerHTML = `$${ formatNum(chartDataArr[chartDataArrLen-1].net_revenue) }`;
    // document.getElementById('mrr-growth-val').innerHTML = `${ chartDataArr[chartDataArrLen-1].mrr_growth }%`;
    // document.getElementById('arpu-val').innerHTML = `$${ formatNum(chartDataArr[chartDataArrLen-1].arpu) }`;
    // document.getElementById('cac-val').innerHTML = `$${ formatNum(chartDataArr[chartDataArrLen-1].cac) }`;
    // document.getElementById('ltv-val').innerHTML = `$${ formatNum(chartDataArr[chartDataArrLen-1].ltv) }`;

    // feeding KPI change and chart kpi tickers
    if((parseInt(arg))===70122) {
        emailSendChangeperElem.innerHTML = "_";
        emailOpenChangeperElem.innerHTML = "-";
        emailClickChangeperElem.innerHTML = "-";
        // arrChangeperElem.innerHTML = "-";
        // mrrChangeper = ((chartDataArr[chartDataArrLen-1].gross_revenue - chartDataArr[chartDataArrLen-2].gross_revenue)/chartDataArr[chartDataArrLen-2].gross_revenue*100).toFixed(0);
        // nrChangeper = (( chartDataArr[chartDataArrLen-1].net_revenue - chartDataArr[chartDataArrLen-2].net_revenue ) / chartDataArr[chartDataArrLen-2].net_revenue * 100).toFixed(0);
        // mrrGrowthChangeper = (( chartDataArr[chartDataArrLen-1].mrr_growth - chartDataArr[chartDataArrLen-2].mrr_growth )).toFixed(2);
        // arpuChangeper = (( chartDataArr[chartDataArrLen-1].arpu - chartDataArr[chartDataArrLen-2].arpu ) / chartDataArr[chartDataArrLen-2].arpu * 100).toFixed(0);
        // cacChangeper = (( chartDataArr[chartDataArrLen-1].cac - chartDataArr[chartDataArrLen-2].cac ) / chartDataArr[chartDataArrLen-2].cac * 100).toFixed(0);
        // ltvChangeper = (( chartDataArr[chartDataArrLen-1].ltv - chartDataArr[chartDataArrLen-2].ltv ) / chartDataArr[chartDataArrLen-2].ltv * 100).toFixed(0);

        // condition to assign positive/negative css classes to mrr change change percentage kpi inside chart card
        // if(mrrChangeper < 0 ) {
        //     mrrChangeperElem.innerHTML = Math.abs(mrrChangeper) + '%';
        //     mrrChangeperElem.classList.add('has-down-val');
        //   } else if(mrrChangeper >= 0 ) {
        //     mrrChangeperElem.innerHTML = mrrChangeper + '%';
        //     mrrChangeperElem.classList.add('has-up-val');
        //   }

          // condition to assign positive/negative css classes to nr change change percentage kpi inside chart card
        //   if(nrChangeper < 0 ) {
        //     nrChangeperElem.innerHTML = Math.abs(nrChangeper) + '%';
        //     nrChangeperElem.classList.add('has-down-val');
        //   } else if(nrChangeper >= 0 ) {
        //     nrChangeperElem.innerHTML = mrrChangeper + '%';
        //     nrChangeperElem.classList.add('has-up-val');
        //   }

          // condition to assign positive/negative css classes to mrr growth rate change percentage kpi inside chart card
        // if(mrrGrowthChangeper < 0 ) {
        //     mrrGrowthChangeperElem.innerHTML = Math.abs(mrrGrowthChangeper) + '%';
        //     mrrGrowthChangeperElem.classList.add('has-down-val');
        // } else if(mrrGrowthChangeper >= 0 ) {
        //     mrrGrowthChangeperElem.innerHTML = Math.abs(mrrGrowthChangeper) + '%';
        //     mrrGrowthChangeperElem.classList.add('has-up-val');
        // }

        // condition to assign positive/negative css classes to arpu change percentage kpi inside chart card
    //   if(arpuChangeper < 0 ) {
    //     arpuChangeperElem.innerHTML = Math.abs(arpuChangeper) + '%';
    //     arpuChangeperElem.classList.add('has-down-val');
    //   } else if(arpuChangeper >= 0 ) {
    //     arpuChangeperElem.innerHTML = arpuChangeper + '%';
    //     arpuChangeperElem.classList.add('has-up-val');
    //   }

      // condition to assign positive/negative css classes to cac change percentage kpi inside chart card
    //   if(cacChangeper < 0 ) {
    //     cacChangeperElem.innerHTML = Math.abs(cacChangeper) + '%';
    //     cacChangeperElem.classList.add('has-down-val');
    //   } else if(cacChangeper >= 0 ) {
    //     cacChangeperElem.innerHTML = cacChangeper + '%';
    //     cacChangeperElem.classList.add('has-up-val');
    //   }

      // condition to assign positive/negative css classes to ltv change percentage kpi inside chart card
    //   if(ltvChangeper < 0 ) {
    //     ltvChangeperElem.innerHTML = Math.abs(ltvChangeper) + '%';
    //     ltvChangeperElem.classList.add('has-down-val');
    //   } else if(ltvChangeper >= 0 ) {
    //     ltvChangeperElem.innerHTML = ltvChangeper + '%';
    //     ltvChangeperElem.classList.add('has-up-val');
    //   }
        
      } else {
      emailSendChangeper = ((emailSendVal-prevEmailSendVal)/prevEmailSendVal*100).toFixed(0);
      emailOpenChangeper = ((emailOpenVal-prevEmailOpenVal)/prevEmailOpenVal*100).toFixed(0);
      emailClickChangeper = ((emailClickVal-prevEmailClickVal)/prevEmailClickVal*100).toFixed(0);
    //   arrChangeper = ((arrVal-prevArrVal)/prevArrVal*100).toFixed(0);
    //   mrrChangeper = ((chartDataArr[chartDataArrLen-1].gross_revenue - chartDataArr[chartDataArrLen-2].gross_revenue)/chartDataArr[chartDataArrLen-2].gross_revenue*100).toFixed(0);
    //   nrChangeper = (( chartDataArr[chartDataArrLen-1].net_revenue - chartDataArr[chartDataArrLen-2].net_revenue ) / chartDataArr[chartDataArrLen-2].net_revenue * 100).toFixed(0);
    //   mrrGrowthChangeper = (( chartDataArr[chartDataArrLen-1].mrr_growth - chartDataArr[chartDataArrLen-2].mrr_growth )).toFixed(2);
    //   arpuChangeper = (( chartDataArr[chartDataArrLen-1].arpu - chartDataArr[chartDataArrLen-2].arpu ) / chartDataArr[chartDataArrLen-2].arpu * 100).toFixed(0);
    //   cacChangeper = (( chartDataArr[chartDataArrLen-1].cac - chartDataArr[chartDataArrLen-2].cac ) / chartDataArr[chartDataArrLen-2].cac * 100).toFixed(0);
    //   ltvChangeper = (( chartDataArr[chartDataArrLen-1].ltv - chartDataArr[chartDataArrLen-2].ltv ) / chartDataArr[chartDataArrLen-2].ltv * 100).toFixed(0);

      // condition to assign positive/negative css classes to renewed users change percentage kpi
      if(emailSendChangeper < 0 ) {
        emailSendChangeperElem.innerHTML = Math.abs(emailSendChangeper) + '%';
        emailSendChangeperElem.classList.add('has-down-val');
      } else if(emailSendChangeper >= 0 ) {
        emailSendChangeperElem.innerHTML = Math.abs(emailSendChangeper) + '%';
        emailSendChangeperElem.classList.add('has-up-val');
      }
      
      
      // condition to assign positive/negative css classes to new users change percentage kpi
      if(emailOpenChangeper <= 0 ) {
        emailOpenChangeperElem.innerHTML = Math.abs(emailOpenChangeper) + '%';
        emailOpenChangeperElem.classList.add('has-down-val');
      } else if(emailOpenChangeper >= 0 ) {
        emailOpenChangeperElem.innerHTML = emailOpenChangeper + '%';
        emailOpenChangeperElem.classList.add('has-up-val');
      }


    //   // condition to assign positive/negative css classes to churned users change percentage kpi
      if(emailClickChangeper < 0 ) {
        emailClickChangeperElem.innerHTML = Math.abs(emailClickChangeper) + '%';
        emailClickChangeperElem.classList.add('has-down-val');
      } else if(emailClickChangeper >= 0 ) {
        emailClickChangeperElem.innerHTML = emailClickChangeper + '%';
        emailClickChangeperElem.classList.add('has-up-val');
      }

    //   // condition to assign positive/negative css classes to annual recurring revenue change percentage kpi
    //   if(arrChangeper < 0 ) {
    //     arrChangeperElem.innerHTML = Math.abs(arrChangeper) + '%';
    //     arrChangeperElem.classList.add('has-down-val');
    //   } else if(arrChangeper >= 0 ) {
    //     arrChangeperElem.innerHTML = arrChangeper + '%';
    //     arrChangeperElem.classList.add('has-up-val');
    //   }

    //   // condition to assign positive/negative css classes to mrr change change percentage kpi inside chart card
    //   if(mrrChangeper < 0 ) {
    //     mrrChangeperElem.innerHTML = Math.abs(mrrChangeper) + '%';
    //     mrrChangeperElem.classList.add('has-down-val');
    //   } else if(mrrChangeper >= 0 ) {
    //     mrrChangeperElem.innerHTML = mrrChangeper + '%';
    //     mrrChangeperElem.classList.add('has-up-val');
    //   }

    //   // condition to assign positive/negative css classes to nr change change percentage kpi inside chart card
    //   if(nrChangeper < 0 ) {
    //     nrChangeperElem.innerHTML = Math.abs(nrChangeper) + '%';
    //     nrChangeperElem.classList.add('has-down-val');
    //   } else if(nrChangeper >= 0 ) {
    //     nrChangeperElem.innerHTML = nrChangeper + '%';
    //     nrChangeperElem.classList.add('has-up-val');
    //   }

    //   // condition to assign positive/negative css classes to mrr growth rate change percentage kpi inside chart card
    //   if(mrrGrowthChangeper < 0 ) {
    //     mrrGrowthChangeperElem.innerHTML = Math.abs(mrrGrowthChangeper) + '%';
    //     mrrGrowthChangeperElem.classList.add('has-down-val');
    //   } else if(mrrGrowthChangeper >= 0 ) {
    //     mrrGrowthChangeperElem.innerHTML = Math.abs(mrrGrowthChangeper) + '%';
    //     mrrGrowthChangeperElem.classList.add('has-up-val');
    //   }

    //   // condition to assign positive/negative css classes to arpu change percentage kpi inside chart card
    //   if(arpuChangeper < 0 ) {
    //     arpuChangeperElem.innerHTML = Math.abs(arpuChangeper) + '%';
    //     arpuChangeperElem.classList.add('has-down-val');
    //   } else if(arpuChangeper >= 0 ) {
    //     arpuChangeperElem.innerHTML = arpuChangeper + '%';
    //     arpuChangeperElem.classList.add('has-up-val');
    //   }

    //   // condition to assign positive/negative css classes to cac change percentage kpi inside chart card
    //   if(cacChangeper < 0 ) {
    //     cacChangeperElem.innerHTML = Math.abs(cacChangeper) + '%';
    //     cacChangeperElem.classList.add('has-down-val');
    //   } else if(cacChangeper >= 0 ) {
    //     cacChangeperElem.innerHTML = cacChangeper + '%';
    //     cacChangeperElem.classList.add('has-up-val');
    //   }

    //   // condition to assign positive/negative css classes to ltv change percentage kpi inside chart card
    //   if(ltvChangeper < 0 ) {
    //     ltvChangeperElem.innerHTML = Math.abs(ltvChangeper) + '%';
    //     ltvChangeperElem.classList.add('has-down-val');
    //   } else if(ltvChangeper >= 0 ) {
    //     ltvChangeperElem.innerHTML = ltvChangeper + '%';
    //     ltvChangeperElem.classList.add('has-up-val');
    //   }
    }
    
  }
  
  updateDashboard = (event) => {
      // removing active classes
      document.getElementById('btn-140122').classList.remove('is-active');
      document.getElementById('btn-140122').classList.remove('has-text-link');
      document.getElementById('btn-70122').classList.remove('is-active');
      document.getElementById('btn-70122').classList.remove('has-text-link');
    //   document.getElementById('btn-2016').classList.remove('is-active');
    //   document.getElementById('btn-2016').classList.remove('has-text-link');
    
    //   if(event.target.id === 'btn-2018') {
    //       document.getElementById('btn-2018').classList.add('is-active');
    //       document.getElementById('btn-2018').classList.add('has-text-link');
    //       this.getData('2018');
    //   } else 
    if(event.target.id === 'btn-140122') {
        document.getElementById('btn-140122').classList.add('is-active');
        document.getElementById('btn-140122').classList.add('has-text-link');
        this.getData('140122');
      } else if(event.target.id === 'btn-70122') {
        document.getElementById('btn-70122').classList.add('is-active');
        document.getElementById('btn-70122').classList.add('has-text-link');
        this.getData('70122');
      }
  }
  
  componentDidMount() {
    fetch(url).then(response => response.json()).then(data => {
      let batchRowValues = data.valueRanges[0].values;
 
      const rows = [];
      for (let i = 1; i < batchRowValues.length; i++) {
        let rowObject = {};
        for (let j = 0; j < batchRowValues[i].length; j++) {
          rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
        }
        rows.push(rowObject);
      }
      
      this.setState({ items: rows }, () => this.getData('140122'));
    });
    
  }
  
  render() {
    return (
      <div className="apps">
        <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <div className="navbar-item is-size-4 has-text-weight-semibold has-text-grey-darker">SaaS Dashboard<span className="is-size-6 has-text-grey has-text-weight-normal">
                      </span></div>
          </div>
          <div className="navbar-end" aria-label="menu" aria-expanded="false">
              {/* eslint-disable */}
              <a id="btn-140122" className="navbar-item is-active has-text-link" href="#" onClick={this.updateDashboard}>Week 2</a>
              <a id="btn-70122" className="navbar-item" href="#" onClick={this.updateDashboard}>Week 1</a>
              {/* <a id="btn-2016" className="navbar-item" herf="#" onClick={this.updateDashboard}>2016</a> */}
              {/* eslint-enable */}
          </div>
        </nav>

        <div className="container is-fullhd">
            <section className="section is-bottom-paddingless has-paddingtop-size-1">
                <div className="columns ">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="columns columns-kpi is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">Email Send</div>
                                    <div id="email-send-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="email-send-val">...</div>
                            </div>
                        </div>
                    </div>
                     <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="columns columns-kpi is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">Email Open</div>
                                    <div id="email-open-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="email-open-val">...</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="columns columns-kpi is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">Email Click</div>
                                    <div id="email-click-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="email-click-val">...</div>
                            </div>
                        </div>
                    </div>
                   {/*  <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="columns columns-kpi is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">ARR</div>
                                    <div id="arr-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div> */}
                                {/* <div id="arr-val">...</div> */}
                            {/* </div>
                        </div>
                    </div> */}
                </div>
            </section>
            <br/>
           
            {/* <section className="section is-bottom-paddingless has-paddingtop-size-1">
                <div className="columns is-multiline">
                    <div className="column is-half-tablet is-one-third-desktop is-half-fullhd">
                        <div className="card">
                            <div className="card-content has-chart">
                                <div className="columns is-marginless is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">Monthly
                                        Reccuring Revenue</div>
                                    <div id="mrr-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="mrr-val">...</div>
                            </div>
                            <div id="mrr-chart"><ReactFC {...this.state.mrrChartData} /></div>
                        </div>
                    </div>
                    <div className="column is-half-tablet is-one-third-desktop is-half-fullhd">
                        <div className="card">
                            <div className="card-content has-chart">
                                <div className="columns is-marginless is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">Net Revenue</div>
                                    <div id="nr-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="nr-val">...</div>
                            </div>
                            <div id="nr-chart"><ReactFC {...this.state.nrChartData} /></div>
                        </div>
                    </div>
                    <div className="column is-half-tablet is-one-third-desktop is-half-fullhd">
                        <div className="card">
                            <div className="card-content has-chart">
                                <div className="columns is-marginless is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">MRR Growth</div>
                                    <div id="mrr-growth-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="mrr-growth-val">...</div>
                            </div>
                            <div id="mrr-growth-chart"><ReactFC {...this.state.mrrGrowthChartData} /></div>
                        </div>
                    </div>
                    <div className="column is-half-tablet is-one-third-desktop is-half-fullhd">
                        <div className="card">
                            <div className="card-content has-chart">
                                <div className="columns is-marginless is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless" data-up="↑"
                                        data-down="↓">ARPU</div>
                                    <div id="arpu-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="arpu-val">...</div>
                            </div>
                            <div id="arpu-chart"><ReactFC {...this.state.arpuChartData} /></div>
                        </div>
                    </div>
                    <div className="column is-half-tablet is-one-third-desktop is-half-fullhd">
                        <div className="card">
                            <div className="card-content has-chart">
                                <div className="columns is-marginless is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">CAC</div>
                                    <div id="cac-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="cac-val">...</div>
                            </div>
                            <div id="cac-chart"><ReactFC {...this.state.cacChartData} /></div>
                        </div>
                    </div>
                    <div className="column is-half-tablet is-one-third-desktop is-half-fullhd">
                        <div className="card">
                            <div className="card-content has-chart">
                                <div className="columns is-marginless is-mobile is-desktop has-block-display">
                                    <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">LTV</div>
                                    <div id="ltv-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless"
                                        data-up="↑" data-down="↓">...</div>
                                </div>
                                <div id="ltv-val">...</div>
                            </div>
                            <div id="ltv-chart"><ReactFC {...this.state.ltvChartData} /></div>
                        </div>
                    </div>
                </div>
            </section> */}
          </div>
          <BarChart/> 
          <BarChart2/> 
          <BarChart3/>
        </div>
     
    );
  }
}

export default Apps;