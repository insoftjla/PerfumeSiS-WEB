import React from "react";
import {Field, reduxForm} from "redux-form";
import {FieldInputNoMsn, maxInt9} from "../../commons/forms/validators";
import {Button, Col, Form} from "react-bootstrap";
import * as PropTypes from "prop-types";

class AddInBasketForm extends React.Component {

    componentDidMount () {
        this.props.initialize({ count: 1 });
    }

    render() {
        let {handleSubmit} = this.props;
        return (
            <Form onSubmit={handleSubmit}>

                <Form.Row>
                    <Col>
                        <Form.Control
                            as={Field}
                            className="w-50"
                            component={FieldInputNoMsn}
                            name="count"
                            validate={[maxInt9]}
                            type="number"
                        />
                    </Col>
                    <Col>
                        <Button type="submit" variant="dark" className="header">В корзину</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

AddInBasketForm.propTypes = {handleSubmit: PropTypes.any}

export default reduxForm({form: "addInBasket"})(AddInBasketForm)