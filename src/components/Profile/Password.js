import React from "react";
import {Field, Form, reduxForm} from "redux-form";
import {Button, Spinner, Table} from "react-bootstrap";
import {FieldInput, matchPassword, password, required} from "../commons/forms/validators";
import style from "./Profile.module.css"


const Password = ({handleSubmit, isUpdate, error}) => {
    return (
        <div>
            <h6 className="mb-4">
                <span className="text-uppercase">Изменить пароль</span>
            </h6>
            <Form onSubmit={handleSubmit}>
                <Table>
                    <tr>
                        <td>
                            Новый пароль
                        </td>
                        <td>
                            <Field
                                className={style.inputOutline}
                                component={FieldInput}
                                type="password"
                                name="password"
                                validate={[password, required]}
                            />
                        </td>
                        <td>
                            Подтвердите пароль
                        </td>
                        <td>
                            <Field
                                className={style.inputOutline}
                                component={FieldInput}
                                type="password"
                                name="confirmPassword"
                                validate={[required, matchPassword]}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            {
                                error && <span className="text-danger">
                                        {error}
                                    </span>
                            }
                            <Button
                                disabled={isUpdate}
                                className="btn-light float-right" type="submit">
                                {isUpdate && <><Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />{" "}</>}
                                Изменить
                            </Button>
                        </td>
                    </tr>
                </Table>
            </Form>
        </div>
    );
}

export default reduxForm({form: "password"})(Password);