import React, { useState } from "react";
import styles from "./ImageSlider.module.css";
import ImageButton from "../../Button/ImageButton/ImageButton";
import cartImg from "../../Navbar/images/cart-shopping-solid.svg"
import buyNow from "../../Navbar/images/bolt-solid.svg";


const ImageSlider = ({ images }) => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [imageSource, setImageSource] = useState(images[0]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {images.map((imageSource, i) => (<img key={i}
          className={
            activeContentIndex === i
              ? `${styles.active} ${styles.demo}`
              : styles.demo
          }
          onClick={() => {
            setActiveContentIndex(i);
            setImageSource(images[i]);
          }}
          src={images[i]}
          alt="Slider _image"
        />))}

      </div>
      <div className={styles.right}>
        <img
          className={styles.actualImage}
          src={imageSource}
          alt="Slide_Image"
        />


        <div className={styles.buttons}>
          <button className={styles.btn}>
            <img src={cartImg} alt="btn" />
            Add To Cart
          </button>
          <button className={styles.btn}>
            <img src={buyNow} alt="btn" />
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
