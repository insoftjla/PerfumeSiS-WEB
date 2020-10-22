import React from "react";
import {NavLink as NavLinkRouter} from "react-router-dom";
import {Nav} from "react-bootstrap";
import {connect} from "react-redux";

const Sidebar = ({brands}) => {

    const brandsMap = brands?.map(brand =>
        <NavLinkRouter to={`/brand/${brand.id}`} className="text-decoration-none">
            {brand.name}
        </NavLinkRouter>
    );

    return (
        <Nav className="flex-column" >
            <h5>BRAND</h5>
            {brandsMap}
        </Nav>
    )
}

const mapStateToProps = state => (
    {
        brands: state.brand.brands
    }
);

export default connect(mapStateToProps, {})(Sidebar)