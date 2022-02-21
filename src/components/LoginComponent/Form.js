import React from 'react';
import style from '../../styles/SignUp.module.css';

const Form = ({ children, className, ...rest }) => {
    return (
        <form className={`${className} ${style.form}`} action="#" {...rest}>
            {children}
        </form>
    );
};

export default Form;
