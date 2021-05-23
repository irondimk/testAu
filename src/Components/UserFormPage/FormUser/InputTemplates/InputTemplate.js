import React from 'react';
import { Field } from 'react-final-form';

import classes from '../FormUser.module.scss';

const InputTemplate = (props) => {
    return (
        <Field name={props.name}
        validate={props.validator}>
            {({ input, meta }) => (
              <div className={classes.form__wrapper_input_block}>
              <div className={classes.form__input_block}>
                <label className={classes.form__label}>{props.label}</label>
                <div className={classes.form__input_wrapper}>
                <input className={(meta.error && meta.touched) ? classes.form__input_error : classes.form__input} {...input} type={props.typeText} />
                {meta.error && meta.touched && <span className={classes.form__error}>{meta.error}</span>}
                </div>
              </div>
              <div className={classes.form__input_prompt}>
                {props.prompt}
              </div>
              </div>
            )}
          </Field>
    );
};

export default InputTemplate;