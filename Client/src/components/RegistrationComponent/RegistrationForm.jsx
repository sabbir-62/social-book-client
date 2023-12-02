import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from './registration.module.css'

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

        alert("Registration Page")
    }

    const navigate = useNavigate()
    const loginPage = () => {
        navigate("/login")
    }
    return (
        <>
            <div className={`${Styles.registrationPage}, ${Styles.minHeight}`}>
                <div className={`${Styles.container}, ${Styles.login}`}>
                    <form className={Styles.registrationForm} method='POST' onSubmit={handleSubmit}>

                        <div className={Styles.formGroup}>
                            <label htmlFor="firstName"></label>
                            <input type="text" className={Styles.inputField} name='firstName' id='firstName' autoComplete='off' value={state.firstName} onChange={(e) => {setValue("firstName", e.target.value)}} placeholder="Enter Your First Name"/>
                        </div>

                        <div className={Styles.formGroup}>
                            <label htmlFor="lastName"></label>
                            <input type="text" className={Styles.inputField} name='lastName' id='lastName' autoComplete='off' value={state.lastName} onChange={(e) => {setValue("lastName", e.target.value)}} placeholder="Enter Your Last Name"/>
                        </div>

                        <div className={Styles.formGroup}>
                            <label htmlFor="email"></label>
                            <input type="text" className={Styles.inputField} name='email' id='email' autoComplete='off' value={state.email} onChange={(e) => {setValue("email", e.target.value)}} placeholder="Enter Your Email"/>
                        </div>

                        <div className={Styles.formGroup}>
                            <label htmlFor="password"></label>
                            <input type="text" className={Styles.inputField} name='password' id='password' autoComplete='off' value={state.password} onChange={(e) => {setValue("password", e.target.value)}} placeholder="Enter Your Password"/>
                        </div>

                        <div className={Styles.formGroup}>
                            <div className={Styles.button}>
                                <button type="submit" className={`${Styles.registrationBtn} btn btn-primary`}>Submit</button>
                                <button className={`btn btn-primary ${Styles.loginBtn}`} onClick={loginPage}>Already a user</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
