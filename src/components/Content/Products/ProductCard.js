import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import {NavLink as NavLinkR} from "react-router-dom";

const ProductCard = ({product}) => {
    if (!product) return <div>Product error</div>

    const productUrl = "/product/" + product.id

    return (
        <Card className="mb-3">
            <NavLinkR to={productUrl}>
                <Card.Img variant="top" src={product.photos[0]?.url}/>
            </NavLinkR>
            <Card.Body>
                <NavLinkR to={productUrl}>
                    <h4 className="text-uppercase text-center">{product.brand?.name}</h4>
                </NavLinkR>
                <NavLinkR to={productUrl}>
                    <p className="text-uppercase text-center price">{product.name}</p>
                </NavLinkR>
                <Card.Text>
                    <Row>
                        <Col>
                            value {product.value}ml
                        </Col>
                        <Col className="text-right">
                            {product.discountedPrice
                                ? <div>
                                    <strike>{product.price}₽</strike>
                                    <span className="font-weight-bold price">  {product.discountedPrice}₽</span>
                                </div>

                                : <p className="font-weight-bold price">{product.price}₽</p>
                            }
                        </Col>
                    </Row>
                </Card.Text>
                <Row>
                    <Col>
                        <Button variant="dark" className="header w-100">Купить</Button>
                    </Col>
                    <Col>
                        <Button variant="dark" className="header w-100">В корзину</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;