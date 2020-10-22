import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import AddInBasketForm from "./CountForm";

const ProductPage = ({products}) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const onAddInBasket = () => {
        return console.log("onAddInBasket")
    }

    const {id} = useParams()

    let product = products.find(item => item.id === Number(id))
    const photosMap = product?.photos.map(photo =>
        <Carousel.Item key={photo.id}>
            <img
                alt="img"
                className="d-block w-100"
                src={photo.url}
            />
        </Carousel.Item>
    )

    return (
        <Container className="p-3">
            <Row>
                <Col>
                    <Carousel activeIndex={index} onSelect={handleSelect} style={{width: 610, height: 610}}>
                        {photosMap}
                    </Carousel>
                </Col>
                <Col>
                    <h4 className="text-uppercase">{product?.brand.name}</h4>
                    <h4>{product?.name}</h4>
                    <p className="mt-3">Туалетная вода</p>
                    <p>value {product?.value}ml</p>
                    {product?.discountedPrice
                        ? <div>
                            <h4 className="font-weight-bold"><strike
                                className="price">{product.price}₽</strike> {product.discountedPrice}₽</h4>
                        </div>
                        : <h4 className="font-weight-bold">{product?.price}₽</h4>
                    }
                    <div>
                        <AddInBasketForm onSubmit={onAddInBasket}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="text-center">Описание</h4>
                    <br/>
                    {product?.description}
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        products: state.product.products
    }
}

export default connect(mapStateToProps)(ProductPage);