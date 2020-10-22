import React from "react";
import {Col, Row} from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";

const Main = (props) => {
    return (
        <Row>
            <Col className="shadow mx-3 p-4" md={3}>
                <Sidebar/>
            </Col>
            <Col className="shadow mr-3">
                Content
            </Col>
        </Row>
    )
}

export default Main;