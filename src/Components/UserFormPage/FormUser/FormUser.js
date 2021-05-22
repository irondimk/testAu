import React from 'react';
import { Form, Field } from 'react-final-form';

import classes from './FormUser.module.scss';
import InputTemplate from './InputTemplates/InputTemplate';
import ContainerCitySelect from './SelectTemplate/ContainerCitySelect';
import SelectTemplate from './SelectTemplate/SelectTemplate';

const FormUser = () => {

  let onSubmit = (valueForm) => {
    debugger;
  }

    return (
        <div>
            <Form
      onSubmit={onSubmit}

      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          {/* <Field name="city">
            {({ input, meta }) => (
              <div className={classes.form__input_block}>
                <label className={classes.form__label}>Ваш город</label>
                <Field className={classes.form__input} name="choosecity" component="select">
              <option />
              <option value="#ff0000">Red</option>
              <option value="#00ff00">Green</option>
              <option value="#0000ff">Blue</option>
            </Field>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field> */}
          
          {/* <SelectTemplate 
            name="cityChoose"
            label="Ваш город"
          /> */}

          <ContainerCitySelect 
          name="cityChoose"
            label="Ваш город" />

              <div className={classes.form__line} />

          <InputTemplate 
          name="password" 
          typeText="password" 
          label="Пароль"
          prompt="Ваш новый пароль должен содержать не менее 5 символов." />

          <InputTemplate 
          name="repeat-password" 
          typeText="password" 
          label="Пароль ещё раз"
          prompt="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки." />

<div className={classes.form__line} />

<InputTemplate 
          name="email" 
          typeText="text" 
          label="Электронная почта"
          prompt="Можно изменить адрес, указанный при регистрации." />

          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      )}/>
        </div>
    );
};

export default FormUser;