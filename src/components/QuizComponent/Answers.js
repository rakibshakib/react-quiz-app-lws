import React from 'react';
import classes from '../../styles/Answers.module.css';
import CheckBox from '../Shared/CheckBox';

const Answers = () => {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer} text="Test ans" />
        </div>
    );
};

export default Answers;
