import React, { useState, useEffect } from 'react';
import styles from "./LeftSideBar.module.css"
import Item from './Item/Item';

// input Price 
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const LeftSideBar = ({ allCategory, handleOptionClick, setIsPriceFilter, setDiscount }) => {


    const options = ['option1', 'option2', 'option3', 'option4'];
    const discounts = [5, 10, 15, 20, 25, 50]


    // price Range
    const [value, setValue] = useState({ min: 2000, max: 10000 });
    const customInputRangeClassNames = {

        maxLabel: styles.customMaxLabel,
        minLabel: styles.customMinLabel,

    };

    function handlePriceChange(event, identifier) {
        if (identifier === 'min') {
            setValue((prev) => ({
                ...prev,
                min: event.target.value
            }));
        } else {
            setValue((prev) => ({
                ...prev,
                max: event.target.value
            }));
        }
    }

    const handlePriceChangeComplete = (newValue) => {
        console.log('Price Range after user interaction:', newValue);
        setIsPriceFilter(newValue);

        // Handle the final value after user interaction if needed


        // call backend here to reduce calls
    };

    return (
        <div className={styles.container}>
            <Item title="Category" options={allCategory} handleOptionClick={handleOptionClick} isPrice={false} isOpen={true} />
            <Item title="Price" options={options} isPrice={true} isOpen={true}>
                <div className={styles.InputRange}>
                    <InputRange
                        // classNames={customInputRangeClassNames}
                        maxValue={30000}
                        minValue={0}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        onChangeComplete={handlePriceChangeComplete}
                        onTouchStart={(e) => e.preventDefault()}
                    />
                </div>
                <div className={styles.price}>
                    <label htmlFor='left'>Min</label>
                    <input
                        id="left"
                        className={styles.price_inp}
                        type='number'
                        value={value.min}
                        onChange={(event) => handlePriceChange(event, "min")}
                    />
                    <label htmlFor='right'>Max</label>
                    <input
                        id="right"
                        className={styles.price_inp}
                        type='number'
                        value={value.max}
                        onChange={(event) => handlePriceChange(event, "max")}
                    />
                </div>
                {/* {console.log(value)} */}
            </Item>
            <Item title="Brand" options={options} isPrice={false} isOpen={false} />
            <Item title="Discounts" options={discounts} isPrice={false} isOpen={true} setDiscount={setDiscount} />
        </div>
    );
};

export default LeftSideBar;
