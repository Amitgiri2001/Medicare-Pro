import React, { useRef, useEffect } from 'react';
import styles from "./ProductDetails.module.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import RightSideBar from "./RightSideBar/RightSideBar";
import More from "./MoreSection/More";
import Rating from "./Rating/Rating";
import FixedBottomComponent from './FixedBottomComponent/FixedBottomComponent';

const ProductDetails = () => {
  const containerRef = useRef();
  const fixedComponentRef = useRef();

  useEffect(() => {
    const containerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Main content container is visible, hide the fixed component
            fixedComponentRef.current.style.display = 'none';
          } else {
            // Main content container is not visible, show the fixed component
            fixedComponentRef.current.style.display = 'block';
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: .4 }
      // from 40% to the bottom of the page
    );

    containerObserver.observe(containerRef.current);

    return () => {
      containerObserver.disconnect(); // Use disconnect instead of unobserve
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.leftContainer}>
          <ImageSlider />
        </div>
        <div className={styles.rightContainer}>
          <RightSideBar />
        </div>
      </div>

      <div ref={fixedComponentRef}>
        <FixedBottomComponent />
      </div>

      <div className={styles.section}>
        <More />
        <Rating />
      </div>
    </div>
  );
};

export default ProductDetails;
