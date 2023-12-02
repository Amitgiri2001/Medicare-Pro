import React from "react";
import styles from "./ProductCard.module.css";
import medicinesImg from "../../TopSection/Image/medicines.jpg";
import { Link } from "react-router-dom";
const ProductCart = ({ data }) => {
  return (
    <div className={styles.card}>
      {/* link to the details page */}
      <Link to={`/products/${data.id}`}>
        <img
          className={styles.cardImg}
          src={data.images[0]}
          alt="Lab test_image"
        />
        <h2 className={styles.name}>{data.title}</h2>
        <p className={styles.bestPrice}>
          Best Price:<span>Rs:₹{(data.price - (data.price * data.discountPercentage * .01)) * 80}</span>
        </p>
        <p className={styles.mrpPrice}>
          MRP:<span>Rs:₹{data.price * 80}</span>
        </p>
        <div className={styles.button}>
          <button className={styles.btn}>Add To Cart</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
