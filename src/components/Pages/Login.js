import React from 'react';
import loginStyle from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../LoginComponent/Form';
import LoginImg from '../LoginComponent/LoginImg';
import TextInput from '../Shared/TextInput';

const Login = () => {
    return (
        <div>
            <h1>Login to your account</h1>
            <div class="column">
                <LoginImg />
                <Form className={loginStyle.login}>
                    <TextInput
                        type="mail"
                        placeholder="Enter your Email"
                        icon="alternate_email"
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                    />
                    <Button>
                        <span>Submit now</span>
                    </Button>

                    <div class="info">
                        Don't have an account? <a href="www"> Signup</a>
                        instead.
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
