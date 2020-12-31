import React, {useState, useEffect} from 'react';
import './Login.css';

import {useDispatch} from 'react-redux';
import { setUser } from '../../../reduxSlices/userSlice';

import {auth, googleProv} from '../../../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [reg, setReg] = useState(false);
    const [error, setError] = useState('');
    const [btnSt, setBtnSt] = useState(true);

    useEffect(() => {
        if(email.length > 0 && password.length > 0 && password2.length>0) setBtnSt(false)
        else setBtnSt(true)
    },[email, password, password2])

    const handleSubmit = (e) => {
        e.preventDefault();
        return (email && password ?
            (
                auth.signInWithEmailAndPassword(email, password)
                    .catch(err => {
                        setError(err.code);
                        console.log(err.code)
                    }),
                setEmail(''), 
                setPassword('')
            ) : null);
    };

    const googleSignIn = () => {
        auth.signInWithPopup(googleProv)
        .catch(err => console.log(err));
    };

    const handleNavigate = () => {
        setEmail('');
        setPassword('');
        setPassword2('');
        setError('');
        setReg(!reg)
    };

    const handleRegister = () => {
        email.length > 5 && password === password2 && password.length > 7 && auth.createUserWithEmailAndPassword(email, password)
            .catch(err => setError(err.code))
        setEmail('');
        setPassword2('');
        setPassword('');
    }
    
    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo"/>
            {!reg?<form className='login__form' onSubmit={handleSubmit} >
                <h1>Sign in</h1>
                <div className="login__formInputs">
                    <input 
                        type="email"
                        className={error === 'auth/user-not-found' && 'error'}
                        placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    <input 
                        type="password"
                        className={error === 'auth/wrong-password' && 'error'}
                        placeholder='Password' 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                    <button type='submit' >Sign in</button>
                </div>
                <div className="login__formGoogle" onClick={googleSignIn}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/google-91-93413.png" alt="Google"/>
                    <span>Login with google</span>
                </div>
                <div className="login__formSIgnup">
                    <p>New to MyMovieList?<span> <strong onClick={handleNavigate}>Sign Up</strong></span></p>
                </div>
            </form>
            :<form className='login__form' onSubmit={handleSubmit} >
                <h1>Register</h1>
                <div className="login__formInputs">
                    <input 
                        type="email" 
                        className={error && 'error'}
                        placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className={error && 'error'}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                    <input 
                        type="password" 
                        className={error && 'error'}
                        placeholder='Confirm Password' 
                        onChange={(e) => setPassword2(e.target.value)}
                        value={password2}
                        />
                    <button 
                        type='submit'
                        className={btnSt && 'btnDisabled'} 
                        onClick={handleRegister}
                        disabled={btnSt}
                         >Register</button>
                </div>
                <div className="login__formSIgnup">
                    <p>Already have an account?<span> <strong onClick={handleNavigate}>Login</strong></span></p>
                </div>
            </form>}
        </div>
    )
}

export default Login;
