import React from 'react';
import { Field } from 'react-final-form';

import classes from '../FormUser.module.scss';

const InputTemplate = (props) => {
    return (
        <Field name={props.name}>
            {({ input, meta }) => (
              <div className={classes.form__wrapper_input_block}>
              <div className={classes.form__input_block}>
                <label className={classes.form__label}>{props.label}</label>
                <input className={classes.form__input} {...input} type={props.typeText} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
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