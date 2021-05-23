import React, { useEffect, useState } from 'react';
import { Field } from 'react-final-form';

import classes from '../FormUser.module.scss';

const SelectTemplate = (props) => {

    let [optionsArr, setOptionsArr] = useState(""); //array options with cities list

    useEffect(()=>{
      let valueOptions;
      if(props.data){
        valueOptions = props.data.map((elem)=>{
          return(
          <option value={elem.city}>{elem.city}</option>
          )
        })
        setOptionsArr([...valueOptions]);
      }
    }, props.data)
    
    return (
      
        <Field name={props.name}>
        
            {({ input, meta }) => (
              
              <div className={classes.form__input_block}>
                <label className={classes.form__label}>{props.label}</label>
                <Field className={classes.form__input} name="choosecity" component="select">
              <option />
              {optionsArr}
            </Field>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
    );
};

export default SelectTemplate;