import React from 'react';

import TopSection from '../Components/TopSection/TopSection';
import TopSlider from '../Components/TopSlider/TopSlider';
import Trending from '../Components/Trending/Trending';

const Home = () => {
    return (
        <div>
            <TopSection />
            <TopSlider />

            <Trending />
        </div>
    )
}

export default Home