import React, {useState} from 'react';
import './Login.css';

import {useDispatch} from 'react-redux';
import { setUser } from '../../../reduxSlices/userSlice';

import {auth} from '../../../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        return (email && password ?
            (
                auth.signInWithEmailAndPassword(email, password)
                    .catch(err => alert(err.message)),
                setEmail(''), 
                setPassword('')
            ) : null);
    };
    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo"/>
            <form className='login__form' onSubmit={handleSubmit} >
                <h1>Sign in</h1>
                <div className="login__formInputs">
                    <input 
                        type="email" 
                        placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                    <button type='submit' >Sign in</button>
                </div>
                <div className="login__formGoogle">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/google-91-93413.png" alt="Google"/>
                    <span>Login with google</span>
                </div>
                <div className="login__formSIgnup">
                    <p>New to MyMovieList?<span> <strong>Sign Up</strong></span></p>
                </div>
            </form>
        </div>
    )
}

export default Login;
