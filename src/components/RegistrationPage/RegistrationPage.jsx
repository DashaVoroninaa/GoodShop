import React from "react";
import {Formik} from "formik";
import * as yup from 'yup'
import { Link } from "react-router-dom";
import css from './registrationPage.module.css'
import { MyTextField } from "./MyTextField";
import { RadioGroup } from "./RadioGroup";

export const Registration = () => {
    
    const validation = yup.object().shape({
        name: yup.string().required('Обязательно').min(2, 'Должно быть не менее двух символов'),
        surname: yup.string().min(2, 'Должно быть не менее двух символов'),
        password: yup.string().required('Обязательно').min(6, 'Должно быть не менее шести символов'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
        email: yup.string().email('Введите корректный email').required('Обязательно'),
        picked: yup.string().oneOf([0 , 1])
    })

    return (
        <div>
            <div className={css.container}>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    picked:'',
                }}
                validateOnBlur
                onSubmit={(values) => {console.log(values)}}
                validationSchema={validation}
            >
                {({values, isValid, handleSubmit, dirty}) => (
                    <form className={css.wrapper}>
                        <MyTextField name="name" type="text" label="Имя*"/>
                        <MyTextField name="surname" type="text" label="Фамилия"/>
                        <MyTextField name="password" type="password" label="Пароль*"/>
                        <MyTextField name="confirmPassword" type="password" label="Подтверждение пароля*"/>
                        <MyTextField name="email" type="email" label="Email*"/>
                        <RadioGroup/>
                        <div className={css.buttons}>
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={`submit`}
                            className={css.button}
                        >Отправить
                        </button>
                        <Link to={'/'}>
                            <button className={css.button} type="button">Отмена</button>
                        </Link>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
        </div>
    )
}
