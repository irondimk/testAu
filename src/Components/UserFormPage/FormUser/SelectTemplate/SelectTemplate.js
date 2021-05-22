import React from 'react';
import { Field } from 'react-final-form';

import classes from '../FormUser.module.scss';

const SelectTemplate = (props) => {
    return (
        <Field name={props.name}>
            {({ input, meta }) => (
              <div className={classes.form__input_block}>
                <label className={classes.form__label}>{props.label}</label>
                <Field className={classes.form__input} name="choosecity" component="select">
              <option />
              <option value="#ff0000">Red</option>
              <option value="#00ff00">Green</option>
              <option value="#0000ff">Blue</option>
            </Field>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
    );
};

export default SelectTemplate;