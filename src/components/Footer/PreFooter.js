import React from "react";
import {Col, Row} from "react-bootstrap";
import {GiCardboardBox, GiPresent, TiPipette} from "react-icons/all";

const PreFooter = () => {
    return (
        <Row className="mt-3 p-5">
            <Col sm={4} className="text-center">
                <GiCardboardBox size={50}/>
                <div className="font-weight-bold">
                    Бесплатная доставка</div>
                <div>при заказе от 3000р.</div>
            </Col>
            <Col sm={4} className="text-center">
                <TiPipette size={50}/>
                <div className="font-weight-bold">
                    Образцы в подарок</div>
                <div>постоянным клиентам</div>
            </Col>
            <Col sm={4} className="text-center">
                <GiPresent size={50}/>
                <div className="font-weight-bold">
                    Розыгрыши</div>
                <div>для всех подписчиков в Instagram</div>
            </Col>
        </Row>
    );
}

export default PreFooter;