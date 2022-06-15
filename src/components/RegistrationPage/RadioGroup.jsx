import React from 'react';
import {Field} from 'formik';

export const RadioGroup = () => {
    return (
        <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="Women" />
              Женщина
            </label>
            <label>
              <Field type="radio" name="picked" value="Man" />
              Мужчина
            </label>
        </div>
    )

          
    
}
