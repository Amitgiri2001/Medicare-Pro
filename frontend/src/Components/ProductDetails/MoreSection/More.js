import React, { useState } from "react";
import styles from "./More.module.css";
const More = ({ description }) => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (

    <div className={styles.more}>
      <h1 className={styles.details}>Details</h1>
      <div className={styles.btn}>
        <button
          className={activeContentIndex === 0 ? styles.active : ""}
          onClick={() => setActiveContentIndex(0)}
        >
          Therapeutic Uses
        </button>
        <button
          className={activeContentIndex === 1 ? styles.active : ""}
          onClick={() => setActiveContentIndex(1)}
        >
          Warning & Precautions
        </button>
        <button
          className={activeContentIndex === 2 ? styles.active : ""}
          onClick={() => setActiveContentIndex(2)}
        >
          Interactions
        </button>
        <button
          className={activeContentIndex === 3 ? styles.active : ""}
          onClick={() => setActiveContentIndex(3)}
        >
          Directions & For Use
        </button>
        <button
          className={activeContentIndex === 4 ? styles.active : ""}
          onClick={() => setActiveContentIndex(4)}
        >
          Side Effects
        </button>
        <button
          className={activeContentIndex === 5 ? styles.active : ""}
          onClick={() => setActiveContentIndex(5)}
        >
          More Information
        </button>
      </div>
      {activeContentIndex === 0 && (
        <div>
          <p>{description}</p>
        </div>
      )}

      {activeContentIndex === 1 && (
        <div>
          <p>Talk to your doctor before taking Volini, if you:</p>
          <ul>
            <li>Are allergic to any of the ingredients in Volini</li>
            <li>
              Have stomach or intestinal ulcers, heart, liver or kidney disease
              or any other medical conditions
            </li>
          </ul>
        </div>
      )}
      {activeContentIndex === 2 && (
        <div>
          <p>
            Tell your doctor before taking Volini, if you are taking any other
            medicine including medicines obtained without prescription or any
            other supplements or herbal products.
          </p>
        </div>
      )}
      {activeContentIndex === 3 && (
        <div>
          <p>
            Always take Volini exactly as your health care provider has told you
          </p>
        </div>
      )}
      {activeContentIndex === 4 && (
        <div>
          <p>
            Volini may cause nausea, vomiting, stomach upset, headache, skin
            rashes or other allergic reactions, although not everybody gets them
          </p>
        </div>
      )}
      {activeContentIndex === 5 && (
        <div>
          <p>
            Keep out of reach of children Store at room temperature (15-25ºC) Do
            not use after the expiry date
          </p>
        </div>
      )}
    </div>
  );
};

export default More;
