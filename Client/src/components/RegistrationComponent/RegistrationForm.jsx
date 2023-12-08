import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from './registration.module.css'
import { toast } from 'react-toastify';




const RegistrationForm = () => {
    // state initialization
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    // set input value into state
    const setValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        }) 
    }

    

    // submit input values into backend using fetch api
    const handleSubmit = async () => {
        const url = 'http://localhost:8000/api/v1/registration';
        const {firstName, lastName, email, password} = state
        try{ 
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password
                })
            })

            const data = await response.json()

            if(data.success){
                toast.success(data.message)
            } 
            else{
                toast.error(data.message)
            } 
        }
        catch(error){
            console.log("Error", error)
        }
    }

    const navigate = useNavigate()
    const loginPage = () => {
        navigate("/login")
    }
    return (
        <>
            <div className={`${Styles.registrationPage}, ${Styles.minHeight}`}>
                <div className={`${Styles.container}, ${Styles.login}`}>
                    <div className={Styles.registrationForm}>

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
                                <button type="submit" className={`${Styles.registrationBtn} btn btn-primary`} onClick={handleSubmit}>Submit</button>
                                <button className={`btn btn-primary ${Styles.loginBtn}`} onClick={loginPage}>Already a user</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
