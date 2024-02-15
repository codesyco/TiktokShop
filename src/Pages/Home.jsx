import React from 'react';
import Banner from '../Components/Banner/Banner';
import NewArrival from '../Components/New Arrivals/NewArrival';
import TopSelling from '../Components/Top Selling/TopSelling';

const Home = () => {
    return (
        <>
        <div>
            <Banner/>
            <NewArrival/>
            <TopSelling/>
        </div>
        </>
    );
};

export default Home;