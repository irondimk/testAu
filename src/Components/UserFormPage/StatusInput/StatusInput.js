import React from 'react';

import classes from './StatusInput.module.scss';

const StatusInput = (props) => {
    return (
        <div className={classes.statusBlock}>
            <input 
            className={classes.statusBlock__input} 
            disabled={props.isStatusEditMode ? false : true} />
        </div>
        
    );
};

export default StatusInput;