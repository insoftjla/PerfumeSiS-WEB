import React from "react";
import {Button, Spinner, Table} from "react-bootstrap";
import {Field, Form, reduxForm} from "redux-form";
import {FieldInput, required} from "../commons/forms/validators";
import style from "./Profile.module.css"

const PersonalData = ({user, handleSubmit, error, isEdit, isUpdate, setIsEdit}) => {

    return (
        <div>
            <h6 className="mb-4">
                <span className="text-uppercase">Личные данные</span>
                {
                    isEdit
                        ? <Button variant="link" className="float-right" onClick={() => setIsEdit(false)}>Отмена</Button>
                        : <Button variant="link" className="float-right" onClick={() => setIsEdit(true)}>Редактировать</Button>
                }

            </h6>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Table>
                        <tr>
                            <td className="w-25">Фамилия</td>
                            <td>
                                {
                                    isEdit
                                        ? <Field
                                            className={style.inputOutline}
                                            component={FieldInput}
                                            name="lastname"
                                            placeholder={user?.lastname}
                                            validate={[required]}
                                        />
                                        : user?.lastname
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Имя</td>
                            <td>
                                {
                                    isEdit
                                        ? <Field
                                            className={style.inputOutline}
                                            component={FieldInput}
                                            name="firstname"
                                            placeholder={user?.firstname}
                                            validate={[required]}
                                        />
                                        : user?.firstname
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Отчество</td>
                            <td>
                                {
                                    isEdit
                                        ? <Field
                                            className={style.inputOutline}
                                            component={FieldInput}
                                            name="patronymic"
                                            placeholder={user?.patronymic}
                                            validate={[required]}
                                        />
                                        : user?.patronymic
                                }
                            </td>
                        </tr>
                        {
                            isEdit
                            && <tr>
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
                            </tr>}
                    </Table>
                </Form>
            </div>
        </div>
    );
}


export default reduxForm({form: "personal"})(PersonalData);