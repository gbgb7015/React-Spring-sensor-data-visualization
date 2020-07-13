import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {Line} from "react-chartjs-2";
import axios from "axios";

class Co2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData:{}
        };
    }
    componentDidMount() {
        this.getChartData();
    }
    getChartData(){
        axios.
        get("http://localhost:8080/json5")
            .then(response => {
                const mapData = response.data;
                const labels = [];
                const data = [];
                mapData.forEach(element => {
                    labels.push(element.time);
                    data.push(parseFloat(element.co2));
                });
                this.setState({
                    chartData:{
                        labels : labels,
                        datasets: [
                            {
                                label: 'Co2',
                                fill: false,
                                lineTension: 0.3,
                                backgroundColor: 'rgba(75,192,192,1)',
                                borderColor: 'rgba(0,0,0,1)',
                                borderWidth: 1,
                                data: data
                            }
                        ]
                    }
                });
            })
    }

    render() {
        return (
            <Card>
                <Line
                    data={this.state.chartData}
                    width={300}
                    height={100}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        title:{
                            display:true,
                            text:'Co2 concentration change',
                            fontSize:20
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        min: 0,
                                        max: 2000
                                    }
                                }
                            ]
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </Card>
        )
    }
}
export default Co2;