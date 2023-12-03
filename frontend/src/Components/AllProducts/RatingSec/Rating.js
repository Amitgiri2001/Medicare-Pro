import React from 'react'
import styles from "./Rating.module.css"
const Rating = ({ rating }) => {
    return (
        <div className={styles.ratingContainer}>
            <button className={styles.rating}>{rating.toFixed(1)} ⭐</button>
            <p>232 Ratings & 124 Reviews</p>
        </div>
    )
}

export default Rating