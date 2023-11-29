import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './registration.module.css'

const RegistrationForm = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        userName: '',
        password: ''
    })

    const setValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        }) 
    }

    const handleSubmit = () => {

        alert(state.email)
    }
    return (
        <>
            <div className="login-page min-height">
                <div className="container login">
                    <form className="login-form" method='POST' onSubmit={handleSubmit}>

                        <div className={styles.form}>
                            <label htmlFor="name"></label>
                            <input type="text" className='input-field' name='name' id='name' autoComplete='off' value={state.name} onChange={(e) => {setValue("name", e.target.value)}} placeholder="Enter Your Name"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input type="text" className='input-field' name='email' id='email' autoComplete='off' value={state.email} onChange={(e) => {setValue("email", e.target.value)}} placeholder="Enter Your Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="userName"></label>
                            <input type="text" className='input-field' name='userName' id='userName' autoComplete='off' value={state.userName} onChange={(e) => {setValue("userName", e.target.value)}} placeholder="Enter Your userName"/>
                        </div>
                        <div>
                            Welcome to Sociaty.IO
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input type="text" className='input-field' name='password' id='password' autoComplete='off' value={state.password} onChange={(e) => {setValue("password", e.target.value)}} placeholder="Enter Your Password"/>
                        </div>

                        <div className="form-group">
                            <div className="button">
                                <button type="submit" className="login-btn btn btn-primary">Login</button>
                                <div className='new-user'>
                                    <span className='loginStatusBtn'>Not a member?</span>
                                    <NavLink className="login-nav-link" to="/registration">Registration</NavLink>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
