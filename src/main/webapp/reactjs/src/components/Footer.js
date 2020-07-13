import React, {Component} from "react";

import {Navbar, Col, Container} from "react-bootstrap";

class Footer extends Component{
    render() {
        let fullYear = new Date().getFullYear();
        return(
            <Navbar fixed="bottom" bg ="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear}, All lights Reserved by 슬기로운 싸강생활</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}
export default Footer;