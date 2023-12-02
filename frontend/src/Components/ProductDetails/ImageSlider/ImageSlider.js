import React, { useState } from "react";
import styles from "./ImageSlider.module.css";


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
      </div>
    </div>
  );
};

export default ImageSlider;
