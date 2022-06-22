import React from 'react';
import {Field} from 'formik';
import css from './registrationPage.module.css'

export const RadioGroup = () => {
    return (
        <div className={css.gender}> Пол
            <label className={css.radiogroup}>
              <Field type="radio" name="gender" value="Female"/>
              Женский
            </label>
            <label  className={css.radiogroup}>
              <Field type="radio" name="gender" value="Male" />
              Мужской
            </label>
        </div>
    )
}
