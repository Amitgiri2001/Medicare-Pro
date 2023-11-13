import React from "react";
import styles from "./Authentication.module.css";
import { Link } from "react-router-dom";

const SignUpform = () => {
    const handaleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className={styles.authentication_form}>
            <h1>Please Sign up</h1>
            <form className={styles.authentication_container} onSubmit={handaleSubmit}>
                <div>
                    <label htmlFor="userEmail">Email address:</label>
                    <input type="email" id="userEmail"></input>
                </div>
                <div>
                    <label htmlFor="userPassword">Create Password:</label>
                    <input type="text" id="userPassword"></input>
                </div>
                <div>
                    <label htmlFor="userPassword">Confirm Password:</label>
                    <input type="text" id="userPassword"></input>
                </div>
                <button className={styles.loginButton}>Sign Up</button>
                <Link to="/login">
                    <p className={styles.alternate}>Already have an account?<span>Login</span></p>
                </Link>
            </form>
        </div>
    );
}
export default SignUpform;