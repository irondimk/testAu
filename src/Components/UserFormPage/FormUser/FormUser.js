import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

import classes from './FormUser.module.scss';

import Validators from '../../../Utils/Validators/Validators';
import InputTemplate from './InputTemplates/InputTemplate';
import ContainerCitySelect from './SelectTemplate/ContainerCitySelect';

const FormUser = () => {

  let [lastEdit, setLastEdit] = useState(" никогда");


  let createDateString = () => {
    let currentDate = new Date();
    let optionsGlobal = {
      month: 'long',
      day: 'numeric',
    };
    let optionsClock = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
    let dayAndMonth = currentDate.toLocaleString("ru", optionsGlobal);
    let hoursMinSec = currentDate.toLocaleString("ru", optionsClock);
    return `${dayAndMonth} ${currentDate.getFullYear()} в ${hoursMinSec}`
  }

  let onSubmit = (valueForm) => {
    setLastEdit(createDateString())

    let result = {
      city: valueForm.cityChoose,
      password: valueForm.password,
      email: valueForm.email,
      isSendToEmail: valueForm.notification
    }
    console.log(JSON.stringify(result));
  }

    return (
        <div>
            <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true, pristine: true }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>

          <ContainerCitySelect 
          name="cityChoose"
          label="Ваш город" 
            validate={Validators.citiesValid("Укажите ваш город")}
          />

              <div className={classes.form__line + " " + classes.form__first_line} />

          <InputTemplate 
          name="password" 
          typeText="password" 
          label="Пароль"
          prompt="Ваш новый пароль должен содержать не менее 5 символов." 
          validator={Validators.composeValidators(
            Validators.passwordSave,
            Validators.minCount(5),
            Validators.emptyValid("Укажите пароль"))}
          />

          <InputTemplate 
          name="repeat-password" 
          typeText="password" 
          label="Пароль ещё раз"
          prompt="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки." 
          validator={Validators.composeValidators(
            Validators.retryPasswordCheck, 
          Validators.emptyValid("Укажите пароль"))}
          />

<div className={classes.form__line} />

<InputTemplate 
          name="email" 
          typeText="text" 
          label="Электронная почта"
          prompt="Можно изменить адрес, указанный при регистрации." 
          validator={Validators.composeValidators(
            Validators.emptyValid("Укажите E-mail"), 
            Validators.emailCheck
          )}
          />

<Field name="notification" type="checkbox">
            {({ input, meta }) => (
              <div className={classes.form__wrapper_input_block}>
              <div className={classes.form__checkbox_block}>
                <label className={classes.form__label}>Я согласен</label>
                <label className={classes.form__checkbox_descr}>
                <input className={classes.form__checkbox} {...input} type="checkbox" />
                {" "}принимать актуальную информацию на емейл</label>
              </div>
              </div>
            )}
          </Field>
         
            <div className={classes.form__submit_block}>
            <button className={classes.form__submit_btn} type="submit" disabled={submitting || pristine}>
              Изменить
            </button>
            <p className={classes.form__lastEdit}>последнее изменение {lastEdit} </p>
            </div>
        </form>
      )}/>
        </div>
    );
};

export default FormUser;