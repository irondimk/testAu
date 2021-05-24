import React, { useState } from 'react';
//styles
import classes from "./UserFormPage.module.scss";
import '../../Utils/CssReset/cssreset.css';
//components
import StatusInput from './StatusInput/StatusInput';
import FormUser from './FormUser/FormUser';

const UserForm = () => {

    let [isStatusEditMode, setStatusEditMode] = useState(false);

    let editStatus = (status) => {
        setStatusEditMode(status);
    }

    return (
        <div className={classes.formPage}>
            <div className={classes.formPage__header_wrapper}>
                <div className={classes.formPage__header}>
                    <h1 className={classes.formPage__title}>
                        Здравствуйте,  
                        <span className={classes.formPage__title_username}>
                            {" "}Человек №3596941
                        </span>
                    </h1>
                    <a className={classes.formPage__editStatus_btn} 
                    onClick={()=>{editStatus(!isStatusEditMode)}}>
                        {isStatusEditMode? "Сохранить статус" : "Сменить статус"}
                    </a>
                </div>
                <StatusInput isStatusEditMode={isStatusEditMode}/>
            </div>
            <FormUser/>    
        </div>
    );
};

export default UserForm;