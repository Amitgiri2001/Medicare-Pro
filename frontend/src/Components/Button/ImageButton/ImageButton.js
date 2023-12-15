import React, { useState, useEffect } from 'react';
import styles from './ImageButton.module.css';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";


const ImageButton = (props) => {
    const Image = props.url;
    const text = props.text;

    const [authenticationPageVisible, setAuthenticationPageVisible] = useState(false);
    const [showArrowIcon, setShowArrowIcon] = useState(true);
    const [linkActive, setLinkActive] = useState(false);

    const handleMouseOver = () => {
        if (text === "LogIn") {
            if(window.innerWidth <= 600) {
                setAuthenticationPageVisible(false);
            } else {
                setAuthenticationPageVisible(true);
            }
        }
    };
    const handleMouseLeave = () => {
        setAuthenticationPageVisible(false);
    };
    const handleAuthenticationContainerMouseOver = () => {
        setAuthenticationPageVisible(true);
    }

    const handleWindowEvent = () => {
        const windowWidth = window.innerWidth;
        if(windowWidth <= 600) {
            setShowArrowIcon(false);
        } else {
            setShowArrowIcon(true);
        }
    }
    useEffect(() => {
        // Add listeners to handle window resize and scroll
        window.addEventListener("resize", handleWindowEvent);
    
        // Initial handling of window size
        handleWindowEvent();
    
        // Cleanup the listeners when the component unmounts
        return () => {
          window.removeEventListener("resize", handleWindowEvent);
        };
      },[])

    return (
        <Link 
            to={text === "LogIn" && "login"} 
            className={`${styles.container} ${props.text !== "LogIn" && styles.sidebarContainer} ${props.text === "Signup & Login" && styles.sidebarSignupAndLogin}`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <img className={styles.img} src={Image} alt="user_image" />
            <button className={styles.btn}>{text}</button>
            {showArrowIcon && text === "LogIn" &&
                (
                    <i>
                        {authenticationPageVisible ? <FaChevronUp /> : <FaChevronDown />}
                    </i>
                )
            }
            {text === "LogIn" && authenticationPageVisible &&
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
        </Link>
    )
}

export default ImageButton;