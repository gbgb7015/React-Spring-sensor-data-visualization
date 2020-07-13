import React, {Component} from "react";

import  {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Link to={"sensortable"} className = "navbar-brand">
                    <img src="https://img.icons8.com/cotton/64/000000/business-network.png" width="25" height="25"/>  Dashboard
                </Link>
                <Nav className="mr-auto">
                    <Link to={"temperature"} className = "nav-link">Temperature</Link>
                    <Link to={"humidity"} className = "nav-link">Humidity</Link>
                    <Link to={"brightness"} className = "nav-link">Brightness</Link>
                    <Link to={"movement"} className = "nav-link">Movement</Link>
                    <Link to={"co2"} className = "nav-link">Co2</Link>
                    <Link to={"toxicgas"} className = "nav-link">Toxicgas</Link>
                </Nav>
            </Navbar>
        );
    }
}
export default NavigationBar;