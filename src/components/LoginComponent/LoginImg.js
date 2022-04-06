import React from 'react';
import loginImg from '../../assets/images/login.svg';
import loginStyle from '../../styles/Login.module.css';

const LoginImg = () => {
    return (
        <div class={loginStyle.illustration}>
            <img src={loginImg} alt="Login" />
        </div>
    );
};

export default LoginImg;
