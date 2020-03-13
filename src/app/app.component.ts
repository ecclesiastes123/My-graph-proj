import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'highcharts-sample';
  sAmount = 0;
  Mamount=0;
  RLevel=0;
 
chartOptions :{};
setOptions :{};
Highcharts = Highcharts;
constructor() {}

ngOnInit(){
    Highcharts.setOptions({
        lang: {
          thousandsSep: ','
      }
    });

  this.chartOptions = {

    responsive: {  
        rules: [{  
          condition: {  
            maxWidth: "792"  
          },  
          chartOptions: {  
            tooltip: {
                positioner: function () {
                    return { x: 20, y: 50 };
                },      
            }
          }  
        }]  
      },
    chart: {
        backgroundColor: '#F5F5F5',
        fontFamily: 'Garamond',
        type: 'areaspline',
        events: {
          load(){
            let slider1 = <HTMLInputElement>document.getElementById("sAmount");
            let slider2 = <HTMLInputElement>document.getElementById("RLevel");
            let slider3 = <HTMLInputElement>document.getElementById("Mamount");

            let dataSequence1 = [
                [510,625,783,980,1210,1475,1923],
                [201866,241596,302429,378580,473905,567176,742605],
                [418375,500718,626797,784622,939046,1175494,1539079],
               ];           

            let dataSequence2 = [
                [506,607,738,896,1070,1280,1607],
                [200663,234480,284877,346104,420491,491357,620665],
                [415881,485970,590418,717315,838205,1018358,1286354],
               ];
           
            let dataSequence3 = [
                [502,512,525,538,540,570,563],
                [193967,197884,202087,208028,213293,217601,224227],
                [402004,410123,420504,431146,439854,450987,464719]
               ];

            slider1.addEventListener("input", ()=>{

                this.series[0].setData(dataSequence1[slider1.value]);
                this.series[1].setData(dataSequence2[slider1.value]);
                this.series[2].setData(dataSequence3[slider1.value]);
            });

            slider2.addEventListener("input", ()=>{

                this.series[0].setData(dataSequence1[slider2.value]);
                this.series[1].setData(dataSequence2[slider2.value]);
                this.series[2].setData(dataSequence3[slider2.value]);
            });

            slider3.addEventListener("input", ()=>{

                this.series[0].setData(dataSequence1[slider3.value]);
                this.series[1].setData(dataSequence2[slider3.value]);
                this.series[2].setData(dataSequence3[slider3.value]);
            });

            (function (H) {
                H.wrap(H.Tooltip.prototype, 'hide', function (defaultCallback) {
                });
            }(Highcharts));
          }
        }  
      },    
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [' ','5 <br/> years', '10 <br/> years', '15 <br/> years', '20 <br/> years', '25 <br/> years', '30 <br/> years'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        },
        crosshair: {
            width: 0.5,
            color: 'white',
            zIndex: 2000
        },
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        visible: true,        
        minorTickLength: 0,
        tickLength: 0
    },
    yAxis: {
            min:480,
            
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                return this.value / 1000;
            },
            enabled: false
            },
    lineWidth: 0,
    minorGridLineWidth: 0,
    lineColor: 'transparent',
    visible: false,        
    minorTickLength: 0,
    tickLength: 0
    },
    legend: {
            enabled: false,
        
    },

        
    credits: {
        enabled: false
    },
    
    tooltip: {
        useHTML: true,

        formatter: function () {
            // The first returned item is the header, subsequent items are the
            // points
            return [].concat(
                this.points ?
                    this.points.map(function (point) {
                        return '<span style="color:#666666;">&emsp;'+point.series.name + '</span><br/><span style="color:'+point.series.color.stops[0][1]+';">●</span>&emsp;<strong>$'+Highcharts.numberFormat(point.y, 0)+'</strong>' ;
                    }) : []
            );
        },
        style:{
            fontSize:"18px",
        },
     
        split: true,
        valueSuffix: ' $',
        positioner: function () {
            return { x: 400, y: 50 };
        },
       
        shadow: false,
        borderWidth: 0,
        backgroundColor: 'none'
    },
    plotOptions: {
        area: {
            fillOpacity:4,
            stacking: 'normal',
            lineColor: '#c3e6d3',
            
            marker: {
                lineWidth: 0,
                lineColor: ''
            }
        },
        
        series: {
            lineWidth: 0,
            marker: {
                enabled: false,
                radius:3,
                symbol:"circle",
                fillColor: '#fdffff',
                
            }
        }
    },
    series: [{
        color:{
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#3c9f75'],
                [1, '#e2f9ef']
            ]
        },
        name: 'Sarwa',
        data: [510,625,783,980,1210,1475,1923]
    }, {
        color:{
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#6ac995'],
                [1, '#eaf8f0']
            ]
        },
        name: 'Traditionaal Investors',
        data: [506,607,738,896,1070,1280,1607]
    }, {
        color: {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#d4f4e6'],
                [1, '#f6f9f8']
            ]
        },
        name: 'Savings Account',
        data: [502,512,525,538,540,570,563]
    }, ]
};
  
}
}
