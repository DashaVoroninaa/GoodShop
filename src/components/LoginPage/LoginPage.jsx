import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup'

import { MyTextField } from "components/RegistrationPage/MyTextField";
import css from './loginPage.module.css'

export const LoginPage = () => {

  const logValidate = yup.object().shape({
    login: yup.string().required('Обязательно'),
    password: yup.string().required('Обязательно'),
  })

  return (
    <div className={css.container}>
      <Formik
      initialValues = {{
        login: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={(values) => {console.log(values)}}
      validationSchema={logValidate}
      >
      {({isValid, handleSubmit, dirty }) => (
        <form className={css.wrapper}>
          <MyTextField name='login' type='email' label='Логин'/>
          <MyTextField name='password' type='password' label='Пароль'/>
          <div className={css.buttons}>
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={`submit`}
              className={css.button}
            >Войти</button>
            <Link to='/regestration'>
              <button className={css.button}>Зарегистрироваться</button>
            </Link>
          </div>
        </form>
      )}
  </Formik>
    </div>
  )
}
