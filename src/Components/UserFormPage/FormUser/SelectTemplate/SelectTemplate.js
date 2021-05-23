import React, { useEffect, useState } from 'react';
import { Field } from 'react-final-form';
import Validators from '../../../../Utils/Validators/Validators';

import classes from '../FormUser.module.scss';

const SelectTemplate = (props) => {

    let [optionsArr, setOptionsArr] = useState(""); //array options with cities list
    let [isCityWasEdit, setIsCityWasEdit] = useState(false);

    useEffect(()=>{
      let valueOptions;
      if(props.data){
        valueOptions = props.data.map((elem)=>{
          return(
          <option key={elem.city} value={elem.city}>{elem.city}</option>
          )
        })
        valueOptions.unshift(<option key="empty city" value=""></option>)
        setOptionsArr([...valueOptions]);
      }
    }, props.data)

    return (

<Field name={props.name}  component="select" options={optionsArr} validate={props.validate}>
    { ({input,  meta, options}) => {
        return (
          <div className={classes.form__input_block}>
                 <label className={classes.form__label}>{props.label}</label>
                 <div className={classes.form__input_wrapper}>
                 <Opts options={options} name={input.name} onChange={ (value) => {input.onChange(value); setIsCityWasEdit(true); }}/>
          {meta.error && isCityWasEdit && <span className={classes.form__error}>{meta.error}</span>}
          </div>
              </div>
        )
    }}
</Field>
    );
};


const Opts = (props) => {
  return (
    <select className={classes.form__input} name={props.name} onChange={props.onChange}>
    {props.options}
</select>
  )
};
export default SelectTemplate;