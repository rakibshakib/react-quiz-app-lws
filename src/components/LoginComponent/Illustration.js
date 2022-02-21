import React from 'react';
import singupImage from '../../assets/images/signup.svg';
import style from '../../styles/SignUp.module.css';

const Illustration = () => {
    return (
        <div className={style.illustration}>
            <img src={singupImage} alt="Signup" />
        </div>
    );
};

export default Illustration;
