import React from 'react'
import ProductCard from '../Products/ProductCard/ProductCard'
import styles from "./Trending.module.css";
import Slider from 'react-slick';

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import { SampleNextArrow, SamplePrevArrow } from "../ProductDetails/RightSideBar/ReactSlider/Buttons"
const Trending = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className={styles.container}>
            <Slider {...settings} className={styles.slider}>
                <div>
                    <img src={img1} alt="Trending_Image" />
                </div>
                <div>
                    <img src={img2} alt="Trending_Image" />
                </div>
                <div>
                    <img src={img3} alt="Trending_Image" />
                </div>
                <div>
                    <img src={img4} alt="Trending_Image" />
                </div>
                <div>
                    <img src={img5} alt="Trending_Image" />
                </div>
                <div>
                    <img src={img6} alt="Trending_Image" />
                </div>

            </Slider>
        </div>

    )
}

export default Trending