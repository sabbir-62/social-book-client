import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from './login.module.css'

const LoginForm = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const setValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        }) 
    }

    const handleSubmit = () => {

        alert("Login Page")
    }

    const navigate = useNavigate()
    const registrationPage = () => {
        navigate("/registration")
    }
    return (
        <>
            <div className={`${Styles.loginPage}, ${Styles.minHeight}`}>
                <div className={`${Styles.container}, ${Styles.login}`}>
                    <form className={Styles.loginForm} method='POST' onSubmit={handleSubmit}>

                        <div className={Styles.formGroup}>
                            <label htmlFor="email"></label>
                            <input type="email" className={Styles.inputField} name='email' id='email' autoComplete='off' value={state.email} onChange={(e) => {setValue("email", e.target.value)}} placeholder="Enter Your Email"/>
                        </div>

                        <div className={Styles.formGroup}>
                            <label htmlFor="password"></label>
                            <input type="password" className={Styles.inputField} name='password' id='password' autoComplete='off' value={state.password} onChange={(e) => {setValue("password", e.target.value)}} placeholder="Enter Your Password"/>
                        </div>

                        <div className={Styles.formGroup}>
                            <div className={Styles.button}>
                                <button type="submit" className={`${Styles.loginBtn} btn btn-primary`}>Login</button>
                                <button className={`btn btn-primary ${Styles.registrationBtn}`} onClick={registrationPage}>Create New Account</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
