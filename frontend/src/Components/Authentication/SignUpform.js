import React from "react";
import styles from "./Authentication.module.css";
import { Link } from "react-router-dom";

const SignUpform = () => {
    const handaleSubmit = (event) => {
        event.preventDefault();

        // full form data
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        // console.log(data);

        if (data.password !== data.confirmPassword) {
            console.log("password not matched");
        }
        // ********** do something with the data
        const name = (data.firstName).trim() + ' ' + data.lastName.trim();
        const respnse = fetch("https://api.escuelajs.co/api/v1/users/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "email": data.email,
                "password": data.password,
                "avatar": "https://picsum.photos/800",
            })
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // clear the form data
        // Assuming 'formElement' is the reference to your form
        const formElement = event.target; // You can adjust this based on your actual form reference

        // Reset the form to clear input fields
        formElement.reset();
    }
    return (
        <div className={styles.authentication_form}>
            <h1>Please Sign up</h1>
            <form className={styles.authentication_container} onSubmit={handaleSubmit}>
                <div>
                    <label htmlFor="userFirstName">First Name:</label>
                    <input type="text" id="userFirstName" name="firstName"></input>
                </div>
                <div>
                    <label htmlFor="userLastName">Last Name:</label>
                    <input type="text" id="userLastName" name="lastName"></input>
                </div>
                <div>
                    <label htmlFor="userEmail">Email address:</label>
                    <input type="email" id="userEmail" name="email"></input>
                </div>
                <div>
                    <label htmlFor="userPassword">Create Password:</label>
                    <input type="password" id="userPassword" name="password"></input>
                </div>
                <div>
                    <label htmlFor="userPassword">Confirm Password:</label>
                    <input type="password" id="userPassword" name="confirmPassword"></input>
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



// 