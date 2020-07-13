import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import axios from "axios";
import Temperature from "./Temperature";

class SensorTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sensors : [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/json")
            .then(response => response.data)
            .then((data) => {
                this.setState({sensors : data});
            });
    }

    render() { //sensor table rendering
        return(
          <Card>
              <Card.Header>sensor table</Card.Header>
              <Card.Body>
                  <Table>
                      <thead>
                      <tr align="center">
                          <th>time</th>
                          <th>temperature</th>
                          <th>humidity</th>
                          <th>brightness</th>
                          <th>movement</th>
                          <th>co2</th>
                          <th>toxicgas</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                          this.state.sensors.length === 0?
                              <tr align="center">
                                  <td colSpan="7"></td>
                              </tr> :
                              this.state.sensors.map((sensor) => (
                                  <tr align="center">
                                      <td>{sensor.time}</td>
                                      <td>{sensor.temperature}</td>
                                      <td>{sensor.humidity}</td>
                                      <td>{sensor.brightness}</td>
                                      <td>{sensor.movement}</td>
                                      <td>{sensor.co2}</td>
                                      <td>{sensor.toxicgas}</td>
                                  </tr>
                              ))
                      }
                      </tbody>
                  </Table>
              </Card.Body>
          </Card>
        );
    }
} export default SensorTable;