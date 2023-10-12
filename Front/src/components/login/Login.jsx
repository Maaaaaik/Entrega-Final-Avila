import React, { useState } from 'react';
import Register from '../Register/Register';
import LoginForm from '../LoginForm/LoginForm';
import "./login.css"
import { Divider } from '@mui/material';

function Login(props) {

    const { setIsLoggedIn } = props
    return (
        <div>
            <div className='login'>
                <LoginForm setIsLoggedIn={setIsLoggedIn} />
                <Divider orientation="vertical" flexItem>
                    O
                </Divider>
                <Register />
            </div>
        </div>
    );
}

export default Login;