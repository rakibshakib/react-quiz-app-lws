import React from 'react';
import style from '../../styles/SignUp.module.css';
import Form from '../LoginComponent/Form';
import Illustration from '../LoginComponent/Illustration';
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
                </Form>
            </div>
        </>
    );
};

export default SignUp;
