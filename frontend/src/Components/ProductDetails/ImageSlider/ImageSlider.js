import React, { useState } from "react";
import styles from "./ImageSlider.module.css";
import ImageButton from "../../Button/ImageButton/ImageButton";
import cartImg from "../../Navbar/images/cart-shopping-solid.svg"
import buyNow from "../../Navbar/images/bolt-solid.svg";

// reducer
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/CartReducer";


const ImageSlider = ({ images, id }) => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [imageSource, setImageSource] = useState(images[0]);

  // Zoom image when hover
  const zoomFactor = 1.5;
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  // reducer
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(cartActions.addToCart({ id: id, qty: 1 }));
  }


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {images.map((imageSource, i) => (<img key={i}
          className={
            activeContentIndex === i
              ? `${styles.active} ${styles.demo} ${styles.hoverEffect}`
              : `${styles.demo} ${styles.hoverEffect}`
          }
          onMouseEnter={() => {
            setActiveContentIndex(i);
            setImageSource(images[i]);
          }}
          src={images[i]}
          alt="Slider _image"
        />))}

      </div>
      <div className={styles.right}>
        {/* <img
          className={styles.actualImage}
          src={imageSource}
          alt="Slide_Image"
        /> */}
        <div
          className={styles.image_container}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <img className={styles.actualImage} src={imageSource} alt="Product" />
          {isHovered && (
            <div
              className={styles.zoomed_image}
              style={{
                backgroundPosition: `-${mousePosition.x * zoomFactor}px -${mousePosition.y * zoomFactor}px`, backgroundImage: `url(${imageSource})`,
              }}
            />
          )}
        </div>


        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleAddToCart}>
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
