import React from "react";
import styles from "./CompareTable.module.css";
import cartImg from "../../Navbar/images/cart-shopping-solid.svg";
import buyNow from "../../Navbar/images/bolt-solid.svg";

const CompareTable = ({ product1, product2 }) => {
  return (
    <div>
      <h2>Compare Products</h2>
      <table className={styles.compareTable}>
        <thead>
          <tr>
            <th>Names</th>
            <th>{product1.title}</th>
            <th>{product2.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Image</td>
            <td className={styles.imgContainer}>
              <img
                className={styles.img}
                src={product1.thumbnail}
                alt="product1"
              />
            </td>
            <td className={styles.imgContainer}>
              <img
                className={styles.img}
                src={product2.thumbnail}
                alt="product1"
              />
            </td>
          </tr>
          <tr>
            <td>price</td>
            <td>{product1.price}</td>
            <td>{product2.price}</td>
          </tr>
          <tr>
            <td>discountPercentage</td>
            <td>{product1.discountPercentage}</td>
            <td>{product2.discountPercentage}</td>
          </tr>
          <tr>
            <td>rating</td>
            <td>{product1.rating}</td>
            <td>{product2.rating}</td>
          </tr>
          <tr>
            <td>stock</td>
            <td>{product1.stock}</td>
            <td>{product2.stock}</td>
          </tr>
          <tr>
            <td>description</td>
            <td>{product1.description}</td>
            <td>{product2.description}</td>
          </tr>
          <tr>
            <td>brand</td>
            <td>{product1.brand}</td>
            <td>{product2.brand}</td>
          </tr>
          <tr>
            <td>category</td>
            <td>{product1.category}</td>
            <td>{product2.category}</td>
          </tr>

          <tr>
            <td>Add To Cart</td>
            <td>
              <button className={styles.btn}>
                <img src={cartImg} alt="btn" />
                Add To Cart
              </button>
            </td>
            <td>
              <button className={styles.btn}>
                <img src={cartImg} alt="btn" />
                Add To Cart
              </button>
            </td>
          </tr>
          <tr>
            <td>Buy Now</td>
            <td>
              <button className={styles.btn}>
                <img src={buyNow} alt="btn" />
                Buy Now
              </button>
            </td>
            <td>
              <button className={styles.btn}>
                <img src={buyNow} alt="btn" />
                Buy Now
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
