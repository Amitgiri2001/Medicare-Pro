import React, { useState } from "react";
import styles from "./RightSideBar.module.css";
import ReactSlider from "./ReactSlider/ReactSlider";

const RightSideBar = ({ title, description, rating, price, discountPercentage }) => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.rating}>
          <p>{rating}</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(1 Ratings & 1 Reviews)</p>
        </div>
        <div className={styles.price}>
          <p className={styles.rs}>₹{Math.round((price - (price * discountPercentage * .01)) * 80)}</p>
          <p className={styles.mrp}>
            MRP <span>₹{Math.round(price * 80)}</span>
          </p>
          <p className={styles.save}>Save {Math.round(discountPercentage)} %</p>
        </div>
        <button className={styles.addToCartBtn}>ADD TO CART</button>
        <p>SIZE:100g</p>
        <div className={styles.sizeOptions}>
          <button>100gm</button>
          <button>60gm</button>
          <button>40gm</button>
          <button>15gm</button>
          <button>200gm</button>
        </div>
      </div>

      {/* premium slider */}
      <div className={styles.sliderContainer}>
        <ReactSlider />
        <div className={styles.premium}>
          <p>Membership starting from ₹149 for 3 months</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
