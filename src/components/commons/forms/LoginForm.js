import React from "react";
import {Alert, Button, Form} from 'react-bootstrap';
import {Field, reduxForm} from "redux-form";
import {FieldInput, maxLength15, maxLength50, requiredLogin, requiredPassword} from "./validators";

const LoginForm = ({handleSubmit, error}) => {

    return (

        <Form onSubmit={handleSubmit} className="loginForm">
            <h1 className="text-center font-weight-bold" >Perfume SiS</h1>
            <h3 className="text-center" >Добро пожаловать</h3>
            <Form.Group controlId="formBasicLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                    className="form-control"
                    as={Field}
                    component={FieldInput}
                    name="username"
                    placeholder="Enter login"
                    validate={[maxLength15, requiredLogin]}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    as={Field}
                    component={FieldInput}
                    name="password"
                    type="password"
                    placeholder="Password"
                    validate={[maxLength50, requiredPassword]}/>
            </Form.Group>
            {
                error && <Form.Group controlId="formBasicError">
                    <Alert variant="danger">
                        {error}
                    </Alert>
                </Form.Group>
            }
            <Button className="btn-lg btn-dark btn-block" type="submit">
                Войти
            </Button>
            <div className="text-center" >
                <Button variant="link" href="#">Регистрация</Button>
                <span className="p-2">|</span>
                <Button variant="link" href="#">Не помню пароль</Button>
            </div>
        </Form>
    )
}
export default reduxForm({form: "login"})(LoginForm);