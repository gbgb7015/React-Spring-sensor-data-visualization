import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Welcome from "./components/Welcome";
import NavigationBar from "./components/NavigationBar";

import Temperature from "./components/chart/Temperature";
import Humidity from "./components/chart/Humidity";
import Brightness from "./components/chart/Brightness";
import Movement from "./components/chart/Movement";
import Co2 from "./components/chart/Co2";
import Toxicgas from "./components/chart/Toxicgas";
import SensorTable from "./components/chart/SensorTable";


function App() {
  const marginTop = {
    marginTop:"20px"
  };
  return (
    <Router>
        <NavigationBar/>
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Welcome/>
                    <Switch>
                        <Route path="/temperature" exact component={Temperature}/>
                        <Route path="/humidity" exact component={Humidity}/>
                        <Route path="/brightness" exact component={Brightness}/>
                        <Route path="/movement" exact component={Movement}/>
                        <Route path="/co2" exact component={Co2}/>
                        <Route path="/toxicgas" exact component={Toxicgas}/>
                        <Route path="/sensortable" exact component={SensorTable}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
    </Router>
  );
}

export default App;
