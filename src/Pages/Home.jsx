import React from 'react';
import Banner from '../Components/Banner/Banner';
import NewArrival from '../Components/New Arrivals/NewArrival';
import TopSelling from '../Components/Top Selling/TopSelling';
import './CSS/Home.css'
import ProductBanner from '../Components/Banner/ProductBanner';
import ProductBanner2 from '../Components/Banner/ProductBanner2';

const Home = () => {
    return (
        <>
        <div className='home'>
            <Banner/>
            <NewArrival/>
            <ProductBanner/>
            <TopSelling/>
            <ProductBanner2/>
        </div>
        </>
    );
};

export default Home;