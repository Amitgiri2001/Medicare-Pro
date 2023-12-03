import React, { useState } from "react";
import styles from "./RightSideBar.module.css";
import ReactSlider from "./ReactSlider/ReactSlider";
import Rating from "../../AllProducts/RatingSec/Rating";

const RightSideBar = ({ title, description, rating, price, discountPercentage }) => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <Rating rating={rating} />
        <p>{description}</p>
        <div className={styles.price}>
          <p className={styles.rs}>₹{Math.round((price - (price * discountPercentage * .01)) * 80)}</p>
          <p className={styles.mrp}>
            MRP <span>₹{Math.round(price * 80)}</span>
          </p>
          <p className={styles.card_price}>{discountPercentage}% Off</p>
        </div>
        {/* <button className={styles.addToCartBtn}>ADD TO CART</button> */}
        {/* <p>SIZE:100g</p>
        <div className={styles.sizeOptions}>
          <button>100gm</button>
          <button>60gm</button>
          <button>40gm</button>
          <button>15gm</button>
          <button>200gm</button>
        </div> */}
      </div>

      {/* premium slider */}
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <ReactSlider /></div>
        <div className={styles.premium}>
          <p>Membership starting from ₹149 for 3 months</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
