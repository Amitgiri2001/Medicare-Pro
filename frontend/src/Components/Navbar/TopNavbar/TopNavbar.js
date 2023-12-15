import React, {useState, useEffect} from "react";
import styles from "./TopNavbar.module.css";
import userImage from "../images/user-solid.svg";
import cartImage from "../images/cart-shopping-solid.svg";
import searchImage from "../images/magnifying-glass-solid.svg";
import ProductImg from "../images/Product.svg"
import logoImage from "../images/notes-medical-solid.svg";
import ImageButton from "../../Button/ImageButton/ImageButton";
import { FaArrowRight } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


function TopNavbar() {
  const [showSearchContainer, setShowSearchContainer] = useState(true);
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [showImageButton, setShowImageButton] = useState(true);
  const [showArraow, setShowArrow] = useState(false);
  const [showButtonContainer, setShowButtonContainer] = useState(false);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const handleSearchContainer = (e) => {
    e.preventDefault();
    setShowSearchContainer(!showSearchContainer);
    if(window.innerWidth <= 600) {
      setShowSearchButton(true);
      setShowImageButton(true);
    } else {
      setShowSearchButton(!showSearchButton);
      setShowImageButton(!showImageButton);
    }
    setShowArrow(!showArraow);
  }

  const handleWindowEvent = () => {
    // Get the current window width
    const windowWidth = window.innerWidth;
    const scrollPosition = window.scrollY;

    if(windowWidth <= 850) {
      setShowSearchContainer(false);
      setShowSearchButton(true);
      setShowImageButton(true);
      setShowArrow(false);
    } else {
      setShowSearchContainer(true);
      setShowSearchButton(false);
      setShowImageButton(true);
      setShowArrow(false);
    }
    if(windowWidth <= 600) {
      setShowButtonContainer(false);
      if (scrollPosition !== previousScrollPosition) {
        // Scroll position changed, hide sidebar
        setShowButtonContainer(false);
      }
      //Set current scrollposition as previous scroll position
      setPreviousScrollPosition(scrollPosition);
    } else {
      setShowButtonContainer(true);
    }
  }
  useEffect(() => {
    // Add listeners to handle window resize and scroll
    window.addEventListener("resize", handleWindowEvent);
    window.addEventListener("scroll", handleWindowEvent);

    // Initial handling of window size
    handleWindowEvent();

    // Cleanup the listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowEvent);
      window.removeEventListener("scroll", handleWindowEvent);
    };
  },[])

  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowButtonContainer(!showButtonContainer);
  }

  return (
    <div>
    <div className={styles.TopNavbar}>
      <i className={styles.toggleIcon} onClick={toggleSidebar}><FaBars /></i>
      <img className={styles.logo} src={logoImage} alt="logoImage Medicare" />
      <div className={`${styles.searchContainer}`} style={!showSearchButton ? {width : "80%"} : {}}>
        {showSearchContainer &&
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
            />
            <button className={styles.searchButton}>
            <img
              className={styles.search_img}
              src={searchImage}
              alt="search_image"
            />
          </button>
        </div>
        }
        {showArraow && 
          <i className={styles.arrow_icon} onClick={handleSearchContainer}>
            <FaArrowRight />
          </i>
        }
      </div>
      {showSearchButton && 
        <i className={styles.search_icon}>
          <img
            className={`${styles.search_img} ${styles.search_img_visibility}`}
            src={searchImage}
            alt="search_image"
            onClick={handleSearchContainer}
          />
        </i>
      }
      {showImageButton &&
        <ImageButton url={userImage} text="LogIn" />
      }
      {showButtonContainer && 
        <div className={`${styles.buttonContainer} ${showSearchContainer && styles.modifiedbuttonContainer}`}>
          <Link to="signup">
            <ImageButton url={userImage} text="Signup & Login" />
          </Link>
          {showImageButton &&
            <Link to="products">
              <ImageButton url={ProductImg} text="Products" />
            </Link>
          }
          {showImageButton &&
            <ImageButton url={cartImage} text="Cart" />
          }
          {showImageButton &&
            <Link to="signup">
              <ImageButton url={userImage} text="Account" />
            </Link>
          }
        </div>
      }
    </div>
    {showSearchContainer && <div className={styles.searchArea}></div>}
    </div>
  );
}

export default TopNavbar;