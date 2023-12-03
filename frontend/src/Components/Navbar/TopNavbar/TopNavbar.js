import React, {useState, useEffect} from "react";
import styles from "./TopNavbar.module.css";
import userImage from "../images/user-solid.svg";
import cartImage from "../images/cart-shopping-solid.svg";
import searchImage from "../images/magnifying-glass-solid.svg";
import ProductImg from "../images/Product.svg"
import logoImage from "../images/notes-medical-solid.svg";
import ImageButton from "../../Button/ImageButton/ImageButton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


function TopNavbar() {
  const [showSearchContainer, setShowSearchContainer] = useState(true);
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [showImageButton, setShowImageButton] = useState(true);
  const [showArraow, setShowArrow] = useState(false);

  const handleSearchContainer = (e) => {
    e.preventDefault();
    setShowSearchContainer(!showSearchContainer);
    setShowSearchButton(!showSearchButton);
    setShowImageButton(!showImageButton);
    setShowArrow(!showArraow);
  }

  const handleWindowEvent = () => {
    // Get the current window width
    const windowWidth = window.innerWidth;
    if(windowWidth <= 800) {
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
    <div className={styles.TopNavbar}>
      <img className={styles.logo} src={logoImage} alt="logoImage Medicare" />
      <div className={styles.searchContainer}>
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
      {showImageButton &&
        <ImageButton url={userImage} text="LogIn" />
      }
      {showImageButton &&
        <ImageButton url={cartImage} text="Cart" />
      }
      {showImageButton &&
        <Link to="products">
          <ImageButton url={ProductImg} text="Products" />
        </Link>
      }
    </div>
  );
}

export default TopNavbar;
