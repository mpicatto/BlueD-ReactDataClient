import React, { PureComponent } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

export default class LineGraph extends PureComponent {
    chartRef = React.createRef();

    newChart={}
    minValue=0

    componentDidMount() {

        this.buildChart();
    }

    componentDidUpdate() {
        this.newChart.destroy()

        this.buildChart();
    }
  
    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data,data2,data3,labels,labelY,labelY2,yAxis} = this.props;
  
        let yMainLabel=""
        let yMainData=[]
        let ySecondLabel=""
        let ySecondData=[]
        
        function setMainAxis(){
            if(labelY==="Precio"){
                yMainLabel=yAxis[0].label
                yMainData=data
            }
            if(labelY==="Stock"){
                yMainLabel=yAxis[1].label
                yMainData=data2
            }
            if(labelY==="Indice Dolar"){
                yMainLabel=yAxis[2].label
                yMainData=data3
            }
        }

        function setSecondAxis(){
            if(labelY2==="Precio"){
                ySecondLabel=yAxis[0].label
                ySecondData=data
            }
            if(labelY2==="Stock"){
                ySecondLabel=yAxis[1].label
                ySecondData=data2
            }
            if(labelY2==="Indice Dolar"){
                ySecondLabel=yAxis[2].label
                ySecondData=data3
            }
        }
        setMainAxis()
        setSecondAxis()

        let type1={
                label: yMainLabel,
                data: yMainData,
                yAxisID:'A',
                type:"line",
                fill:false,
                borderColor: "green",
                backgroundColor:"green",
                
            }
        let type2={
            label: ySecondLabel,
            data: ySecondData,
            yAxisID:'B',
            type:"line",
            fill:false,
            borderColor: "red",
            backgroundColor:"red",
        }      
           
        
       this.newChart= new Chart(myChartRef, {
            
            data: {
                //Bring in data
                labels: labels.length === data.length ? labels : new Array(data.length).fill("Data"),
                datasets: [
                    {
                        label:type1.label,
                        data: type1.data,
                        yAxisID:type1.yAxisID,
                        fill: type1.fill,
                        type:type1.type,
                        borderColor:type1.borderColor,
                        backgroundColor:type1.backgroundColor,
                        pointRadius: 3
                    },
                    {
                        label:type2.label,
                        data: type2.data,
                        yAxisID:type2.yAxisID,
                        fill: type2.fill,
                        type:type2.type,
                        borderColor:type2.borderColor,
                        backgroundColor:type2.backgroundColor,
                        pointRadius: 3
                    }

                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,

                layout: {
                    padding: {
                        top: 5,
                        left: 15,
                        right: 15,
                        bottom: 5
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            offsetGridLines: true
                        },
                    }],
                    yAxes: [{
                        id:type1.yAxisID,
                        scaleLabel:{display:true, labelString:type1.label},
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    
                    },
                    {
                        id:type2.yAxisID,
                        scaleLabel:{display:true, labelString:type2.label},
                        position:'right',
                        ticks: { display: true },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }}
                ],
                    
                }
              }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer} >
                <canvas 
                    id="myChart"
                    ref={this.chartRef}
                    height='300'
                />
            </div>
        )
    }
}