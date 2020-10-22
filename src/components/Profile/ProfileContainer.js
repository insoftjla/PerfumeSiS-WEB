import React from "react";
import {Col, Row} from "react-bootstrap";
import ProfileSidebar from "../Sidebar/ProfileSidebar/ProfileSidebar";
import Profile from "./Profile";

const ProfileContainer = () => {

    return (
        <Row>
            <Col className="shadow mx-3 p-4" md={3}>
                <ProfileSidebar/>
            </Col>
            <Col className="shadow mr-3 p-4">
                <Profile/>
            </Col>
        </Row>
    );
}


export default ProfileContainer;