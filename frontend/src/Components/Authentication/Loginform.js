import React from "react";
import styles from "./Authentication.module.css";

const Loginform = () => {
    const handaleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className={styles.authentication_form}>
            <h1>Please Log in</h1>
            <form className={styles.authentication_container} onSubmit={handaleSubmit}>
                <div>
                    <label htmlFor="userEmail">Email address:</label>
                    <input type="email" id="userEmail"></input>
                </div>
                <div>
                    <label htmlFor="userPassword">
                        <span>Password:</span>
                        <span>Forget Password?</span>
                    </label>
                    <input type="text" id="userPassword"></input>
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