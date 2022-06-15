import React from 'react';
import {useField} from 'formik';
import css from './registrationPage.module.css'

export const MyTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={field.name} className={css.label}>{label}</label>
            <input {...field} {...props} className={css.input_box}/>
            {meta.touched && meta.error && <p className={css.error}>{meta.error}</p>}
        </div>
    );
}
