import React, { useState } from 'react';
import styles from './ImageButton.module.css';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";


const ImageButton = (props) => {
    const Image = props.url;
    const text = props.text;

    const [authenticationPageVisible, setAuthenticationPageVisible] = useState(false);
    const handleMouseOver = () => {
        if (text === "LogIn") {
            setAuthenticationPageVisible(true);
        }
    };
    const handleMouseLeave = () => {
        setAuthenticationPageVisible(false);
    };
    const handleAuthenticationContainerMouseOver = () => {
        setAuthenticationPageVisible(true);
    }

    return (
        <div className={` ${styles.container} ${text !== "LogIn"  ? styles.modifyContainer : ""}`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <img className={styles.img} src={Image} alt="user_image" />
            <button className={styles.btn}>{text}</button>
            {text === "LogIn" &&
                (
                    <i>
                        {authenticationPageVisible ? <FaChevronUp /> : <FaChevronDown />}
                    </i>
                )
            }
            {text === "LogIn" &&
                authenticationPageVisible &&
                (
                    <Link
                        className={styles.authentication_container}
                        onMouseOver={handleAuthenticationContainerMouseOver}
                    >
                        <Link to="login">
                            <button className={styles.login}>Login</button>
                        </Link>
                        <Link to="signup">
                            <h1 className={styles.signup}>
                                <span>New Customer?</span>
                                <span>Sign Up</span>
                            </h1>
                        </Link>
                        <Link to="signup">
                            <h1 className={styles.signup}>
                                <span>Your Profile</span>

                            </h1>
                        </Link>
                        <Link to="signup">
                            <h1 className={styles.signup}>
                                <span>Orders</span>

                            </h1>
                        </Link>
                    </Link>
                )
            }
        </div>
    )
}

export default ImageButton;