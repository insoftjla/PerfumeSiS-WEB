import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import AuthorizationContainer from "../components/Authorization/AutorizationContainer";
import ProfileContainer from "../components/Profile/ProfileContainer";
import PreFooter from "../components/Footer/PreFooter";
import {Col, Container, Row} from "react-bootstrap";
import Header from "../components/Header/Header";
import SubHeader from "../components/Header/SubHeader/SubHeader";
import Footer from "../components/Footer/Footer";
import Products from "../components/Content/Products/Products";
import ProductPage from "../components/Content/Products/ProductPage";

const ScreenRoot = () => (
    <BrowserRouter>
        <Container fluid className="container-xxl">
            <Row className="fixed-top m-xl-0">
                <Col className="shadow bg-white rounded p-0"><Header/></Col>
            </Row>
            <Row>
                <Col className="shadow-lg p-0 mb-4 mt-5 bg-white rounded"><SubHeader/></Col>
            </Row>
            <Switch>
                <Route exact path="/" component={() => <Products/>}/>
                <Route exact path="/profile" component={() => <ProfileContainer/>}/>
                <Route exact path="/product/:id" component={() => <ProductPage/>}/>
                <Route path="/login" component={() => <AuthorizationContainer/>}/>
                <Route path="/*" component={() => <div>Error 404</div>}/>
            </Switch>
            <PreFooter/>
            <Footer/>
        </Container>
    </BrowserRouter>
)

export default ScreenRoot;