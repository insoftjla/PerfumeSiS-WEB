import React from "react";
import {connect} from "react-redux";
import ProductCard from "./ProductCard";
import {loadProducts} from "../../../redux/reducers/product";
import {Col, Row} from "react-bootstrap";
import Sidebar from "../../Sidebar/Sidebar";

const Products = ({products, brands}) => {

    const productsMap = products.map(product => (
        <Col className="mb-3">
            <ProductCard product={product}/>
        </Col>
    ))

    return (
        <Row>
            <Col className="shadow mx-3 p-4" md={2}>
                <Sidebar brands={brands}/>
            </Col>
            <Col className="shadow mr-3 p-4">
                <Row className="row-cols-md-3">
                    {productsMap}
                </Row>
            </Col>
        </Row>
    );
}

let mapStateToProps = (state) => {
    return {
        products: state.product.products,
    }
}

export default connect(mapStateToProps, {loadProducts})(Products);