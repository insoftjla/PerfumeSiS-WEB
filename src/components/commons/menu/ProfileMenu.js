import React from "react";
import {Button, Col, Dropdown, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../../redux/reducers/authorization";
import stile from "./ProfileMenu.module.css"

const ProfileMenu = ({logout, isAuth, user}) => {

    const onLogout = () => {
        logout();
    }

    if (!isAuth) return <NavLink to="/login">Войти</NavLink>

    return (
        <Dropdown alignRight className="ml-5">
            <Dropdown.Toggle variant="" id="dropdown-basic">
                <img
                    alt="img"
                    className="d-inline-block align-top"
                    src={user?.photoUrl}
                    height="22"
                    width="22"/>
                {user?.firstName}
            </Dropdown.Toggle>
            <Dropdown.Menu className={"dropdown-menu-login " + stile.dropdownProfileMenu}>
                <Dropdown.ItemText>
                    <Row>
                        <Col>
                            <img
                                alt="img"
                                className="d-inline-block align-top"
                                src={user?.photoUrl}
                                height="22"
                                width="22"/>

                        </Col>
                        <Col>
                            <h4>{user?.firstname} {user?.lastname}</h4>
                            <p>{user?.email}</p>
                        </Col>
                        <Row>
                            <NavLink to="/profile">Управление аккаунтом</NavLink>
                        </Row>
                    </Row>
                </Dropdown.ItemText>
                <Dropdown.Divider/>
                <Dropdown.ItemText className="float-right">
                    <Button onClick={onLogout}
                            className="float-right"
                            variant="primary">
                        Sign out
                    </Button>
                </Dropdown.ItemText>
            </Dropdown.Menu>
        </Dropdown>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.authorization.isAuth,
        user: state.authorization.user
    }
}

export default connect(mapStateToProps, {logout})(ProfileMenu);

