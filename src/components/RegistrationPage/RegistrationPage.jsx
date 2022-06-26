import React from "react";
import {Formik, Field, ErrorMessage} from "formik";
import * as yup from 'yup'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import css from './registrationPage.module.css'
import { MyTextField } from "./MyTextField";
import { RadioGroup } from "./RadioGroup";
import { authAction } from "store/registrationSlice";

export const Registration = () => {
    
    const dispatch = useDispatch();
    const checkAuth = () => dispatch(authAction.checkAuth());

    const validation = yup.object().shape({
        name: yup.string().required('Обязательно').min(2, 'Должно быть не менее двух символов'),
        surname: yup.string().min(2, 'Должно быть не менее двух символов'),
        password: yup.string().required('Обязательно').min(6, 'Должно быть не менее шести символов'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
        email: yup.string().email('Введите корректный email').required('Обязательно'),
        bornAt: yup.date().required('Обязательно')
    })

    const navigate = useNavigate()

    const handleSubmit = () => {
        checkAuth();
        navigate('/')
    };

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
                    gender:'',
                    bornAt:'',
                    isSubscribe:'',
                }}
                validateOnBlur
                onSubmit={handleSubmit}
                validationSchema={validation}
            >
                {({isValid, handleSubmit, dirty}) => (
                    <form className={css.wrapper}>
                        <h4>Регистрация</h4>
                        <MyTextField name="name" type="text" label="Имя*"/>
                        <MyTextField name="surname" type="text" label="Фамилия"/>
                        <MyTextField name="password" type="password" label="Пароль*"/>
                        <MyTextField name="confirmPassword" type="password" label="Подтверждение пароля*"/>
                        <MyTextField name="email" type="email" label="Email*"/>
                        <RadioGroup/>
                        <div>
                            <label> Дата рождения*
                                <Field name='bornAt' type='date' className={css.date}/>
                            </label>
                            <p  className={css.error}>
                                <ErrorMessage name='bornAt'/>
                            </p>
                        </div>
                        <div>
                            <label>
                                <Field name='isSubscribe' type='checkbox'/>
                                Подписка на новости
                            </label>
                        </div>
                        
                        <div className={css.buttons}>
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type='submit'
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
