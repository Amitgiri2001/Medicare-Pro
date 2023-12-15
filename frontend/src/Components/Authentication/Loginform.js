import React, { useState } from "react";
import styles from "./Authentication.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthReducer"

const Loginform = () => {
    // reducer

    const dispatch = useDispatch();

    const [enteredValues, setEnteredValues] = useState({
        email: "", password: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();

        // ********** do something with the data
        console.log(enteredValues);

        const respnse = fetch("https://api.escuelajs.co/api/v1/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": enteredValues.email,
                "password": enteredValues.password,
            })
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                dispatch(authActions.logIn())
            })
            .catch(error => {
                console.error('Error:', error);
            });


        // clear the input fields
        setEnteredValues((prev) => ({
            ...prev,
            email: "",
            password: "",
        }));
    }

    function handleChange(identifier, value) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value

        }))
    }
    return (
        <div className={styles.authentication_form}>
            <h1>Please Log in</h1>
            <form className={styles.authentication_container} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userEmail">Email address:</label>
                    <input type="email" id="userEmail" onChange={(event) => handleChange('email', event.target.value)} value={enteredValues.email}></input>
                </div>
                <div>
                    <label htmlFor="userPassword">
                        <span>Password:</span>
                        <span>Forget Password?</span>
                    </label>
                    <input type="text" id="userPassword" onChange={(event) => handleChange('password', event.target.value)} value={enteredValues.password}></input>
                </div>
                <button className={styles.loginButton}>Log in</button>
                <p>
                    <hr className={styles.line}></hr>
                    <span>or</span>
                    <hr className={styles.line}></hr>
                </p>
                <button className={styles.googleloginButton}>Login with google</button>
            </form>
        </div>
    );
}
export default Loginform;