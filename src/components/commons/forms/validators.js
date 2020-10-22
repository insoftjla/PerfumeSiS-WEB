import React from "react";

const renderField = TagName => ({
                                    input, placeholder, className, type,
                                    meta: {touched, error, warning}, props
                                }) => {
    let dangerError = touched && error;
    let dangerWarning = touched && warning;

    return (
        <div>
            <div>
                <TagName
                    {...input}
                    placeholder={placeholder}
                    className={className + (dangerError ? " is-invalid" : "")}
                    type={type}
                    {...props}/>
                {(dangerError && <div className="mt-3 text-danger"><span>{error}</span></div>)
                || (dangerWarning && <div className="mt-3 text-warning"><span>{warning}</span></div>)

                }
            </div>
        </div>
    )
}

const renderFieldNoMsn = TagName => ({
                                         input, placeholder, className, type,
                                         meta: {touched, error, warning}, props
                                     }) => {
    let dangerError = touched && error;
    return (
        <div>
            <div>
                <TagName
                    {...input}
                    placeholder={placeholder}
                    className={className + (dangerError ? " is-invalid" : "")}
                    type={type}
                    {...props}/>
            </div>
        </div>
    )
}

export const FieldInput = renderField("input");
export const FieldInputNoMsn = renderFieldNoMsn("input");
export const FieldTextarea = renderField("textarea");


const requiredMes = messages => value => {
    return value ? undefined : messages
}

export const required = value => (value ? undefined : "Это поле является обязательным.")

export const maxInt9 = value => ((value && (value > 0 && value < 10)) ? undefined : "0-9")

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength15 = maxLength(15);
export const maxLength50 = maxLength(50);

export const requiredLogin = requiredMes("Введите имя пользователя.")
export const requiredPassword = requiredMes("Введите пароль.")

export const phoneNumber = value =>
    (value && !/^(\+?)(0|[1-9][0-9]{10})$/i.test(value)
        ? "Не корректно введен номер телефона"
        : undefined)

export const username = value =>
    (value && !/^(\w{5,20})$/i.test(value)
        ? "Должно содержать от 5 до 20 буквенных или цифровых символов. Можно использовать знак подчёркивания"
        : undefined)

export const password = value =>
    (value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\S]{8,}$/i.test(value)
        ? "Используйте надежный пароль."
        : undefined)

export const matchPassword = (value, allValue) =>
    value !== allValue.password
        ? "Пароль не совпадает"
        : undefined


// const email = value =>
//     (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//         ? "Пожалуйста, введите действительный адрес электронной почты (Прим.: username@domain.ru)."
//         : undefined)
