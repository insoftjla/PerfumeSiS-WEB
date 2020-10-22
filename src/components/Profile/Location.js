import React from "react";
import {Field, Form, reduxForm} from "redux-form";
import {Button, Spinner, Table} from "react-bootstrap";
import style from "./Profile.module.css";
import {FieldInput, required} from "../commons/forms/validators";
import {BsX} from "react-icons/all";

const Location = ({isUpdate, isAdd, setIsAdd, locations, handleSubmit}) => {

    return (
        <div>
            <h6 className="mb-4">
                <span className="text-uppercase">Адреса получателя</span>
                {!isAdd && <Button variant="link" className="float-right" onClick={() => setIsAdd(true)}>Добавить адрес</Button>}
            </h6>
            <div>
                <Table>
                    {locations?.map(location => (
                        <tr>
                            <td>
                                <span>{location.fullAddress}</span>
                            </td>
                            <td>
                                <BsX/>
                            </td>
                        </tr>
                    ))}
                </Table>
                {isAdd && <Form onSubmit={handleSubmit}>
                    <h6>
                        <span className="text-uppercase">Добавить адрес получателя</span>
                        <Button variant="link" className="float-right" onClick={() => setIsAdd(false)}>Отмена</Button>
                    </h6>
                    <Table>
                        <tr>
                            <td>Регион*</td>
                            <td>
                                <Field
                                    className={style.inputOutline}
                                    component={FieldInput}
                                    name="country"
                                    validate={[required]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Город*</td>
                            <td>
                                <Field
                                    className={style.inputOutline}
                                    component={FieldInput}
                                    name="city"
                                    validate={[required]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Адрес*</td>
                            <td>
                                <Field
                                    className={style.inputOutline}
                                    component={FieldInput}
                                    name="fullAddress"
                                    validate={[required]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
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
                                    Сохранить
                                </Button>
                            </td>
                        </tr>
                    </Table>
                </Form>}
            </div>
        </div>
    );
}


export default reduxForm({form: "location"})(Location);