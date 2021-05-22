import React from 'react';

import classes from "./UserForm.module.scss";
import '../../Utils/CssReset/cssreset.css';
import StatusInput from './StatusInput/StatusInput';

const UserForm = () => {
    return (
        <div className={classes.formPage}>
        <div className={classes.formPage__header}>
            <h1 className={classes.formPage__title}>
                Здравствуйте,  
                <span className={classes.formPage__title_username}>
                     {" "}Человек №3596941
                </span>
            </h1>
            <a href="#" className={classes.formPage__editStatus_btn}>Сменить статус</a>
            </div>
            <StatusInput/>
        </div>
    );
};

export default UserForm;