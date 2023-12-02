import React, { useState } from 'react';
import styles from "./Item.module.css";
import downArrow from "../../../Navbar/images/downArow.svg";
import upArrow from "../../../Navbar/images/upArrow.svg";

const Item = (props) => {
    const arrow = props.isOpen ? upArrow : downArrow;
    const [selectedOptions, setSelectedOptions] = useState("");
    const [isShowing, setIsShowing] = useState(props.isOpen);
    const [arrowImg, setArrowImg] = useState(arrow);
    function handleChange(event) {
        const isChecked = event.target.checked;
        const option = event.target.value;
        if (isChecked) {
            if (props.title === "Category") {
                props.handleOptionClick(option);

            }
            else if (props.title === 'Discounts') {
                props.setDiscount(option);
            }
            setSelectedOptions(option);

        }
        else if (!isChecked) {

            if (props.title === 'Discounts') {
                props.setDiscount(0);
            }
            setSelectedOptions("");
        }

    }

    // showing the list of options
    function handleClick(event) {
        setIsShowing((prevData) => !prevData);
        if (arrowImg === downArrow)
            setArrowImg(upArrow)
        else setArrowImg(downArrow);
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>{props.title}</p>
                <img src={arrowImg} alt="arrow" onClick={handleClick} />
            </div>
            {!props.isPrice && isShowing && props.options.map((option, i) => (
                <li key={i}>
                    <input id={i} type='radio' value={option} onChange={handleChange} checked={selectedOptions == option} />
                    <label htmlFor={i}>{option}</label>
                </li>
            ))}

            {/* {console.log(selectedOptions)} */}
            {isShowing && props.children}
        </div>
    )
}

export default Item