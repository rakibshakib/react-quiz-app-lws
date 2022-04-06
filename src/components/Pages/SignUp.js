import React from 'react';
import style from '../../styles/SignUp.module.css';
import Button from '../Button';
import Form from '../LoginComponent/Form';
import Illustration from '../LoginComponent/Illustration';
import CheckBox from '../Shared/CheckBox';
import TextInput from '../Shared/TextInput';

const SignUp = () => {
    return (
        <>
            <h1>Create An Account</h1>
            <div className="column">
                <Illustration />
                <Form className={style.signup}>
                    <TextInput
                        type="text"
                        placeholder="Enter your Name"
                        icon="person"
                    />
                    <TextInput
                        type="email"
                        placeholder="Enter your Email"
                        icon="alternate_email"
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                    />
                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon="lock_clock"
                    />
                    <CheckBox text="I agree to the terms &amp; conditions" />
                    <Button>
                        <span>Submit Now</span>
                    </Button>
                    <div className="info">
                        Already have an account? <a href="www">Login</a>{' '}
                        instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default SignUp;
