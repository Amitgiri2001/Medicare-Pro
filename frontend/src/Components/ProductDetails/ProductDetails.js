import React, { useRef, useEffect, useState } from 'react';
import styles from "./ProductDetails.module.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import RightSideBar from "./RightSideBar/RightSideBar";
import More from "./MoreSection/More";
import Rating from "./Rating/Rating";
import FixedBottomComponent from './FixedBottomComponent/FixedBottomComponent';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // get product id from params
  let params = useParams();
  const productId = params.productId;
  console.log("ProductId" + productId);

  const containerRef = useRef();
  const fixedComponentRef = useRef();

  const [product, setProduct] = useState([]);

  useEffect(() => {

    // fetch data from api
    async function fetchProduct() {
      const product = await fetch(`https://dummyjson.com/products/${productId}`);
      const singleProduct = await product.json();
      setProduct(singleProduct);
    }
    fetchProduct();
  }, [productId]);

  const { id, title, description, images, price, discountPercentage, rating, thumbnail, category, brand } = product;

  // console.log(thumbnail);



  return (
    <div>
      {product.length !== 0 && <div ref={containerRef} className={styles.container}>
        {/* {console.log(product)} */}
        <div className={styles.leftContainer}>
          <ImageSlider images={images} id={id} />
        </div>
        <div className={styles.rightContainer}>
          <RightSideBar title={title} description={description} rating={rating} price={price} discountPercentage={discountPercentage} />
        </div>
      </div>}

      <div ref={fixedComponentRef}>
        <FixedBottomComponent />
      </div>

      <div className={styles.section}>
        <More description={description} />
        <Rating />
      </div>
    </div>
  );
};

export default ProductDetails;
