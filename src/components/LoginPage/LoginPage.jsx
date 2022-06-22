import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup'

export const LoginPage = () => {

  const logValidate = yup.object().shape({
    login: yup.string().required('Обязательно'),
    password: yup.string().required('Обязательно'),
  })

  return (
    <div>
      <Formik
      initialValues = {{
        login: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={(values) => {console.log(values)}}
      validationSchema={logValidate}
      >
      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <form action="">
          <p>
          <label htmlFor={`login`}>Логин</label>
            <input type="text"
            name={`login`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.login}/>
          </p>
          {touched.login && errors.login && <p>{errors.login}</p>}
          
          <p>
          <label htmlFor={`password`}>Пароль</label>
            <input type={`text`}
            name={`password`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}/>
          </p>
          {touched.password && errors.password && <p>{errors.password}</p>}
        
        
          <button
          disabled={!isValid && !dirty}
          onClick={handleSubmit}
          type={`submit`}
          >Войти</button>
          <Link to='/regestration'>
            <button>Зарегистрироваться</button>
          </Link>
        
      </form>
      )}
  </Formik>
    </div>
  )
}
