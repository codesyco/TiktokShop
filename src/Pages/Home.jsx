import React from 'react';
import Banner from '../Components/Banner/Banner';
import NewArrival from '../Components/New Arrivals/NewArrival';
import TopSelling from '../Components/Top Selling/TopSelling';
import './CSS/Home.css'
import ProductBanner from '../Components/Banner/ProductBanner';
import ProductBanner2 from '../Components/Banner/ProductBanner2';
import Acheivements from '../Components/Perks/Acheivements';
import Testimonials from '../Components/Testimonials/Testimonials';
import ProductBanner3 from '../Components/Banner/ProductBanner3';

const Home = () => {
    return (
        <>
        <div className='home'>
            <Banner/>
            <Testimonials/>
            <Acheivements/>
            <ProductBanner3/>
            <NewArrival/>
            <ProductBanner/>
            {/* <TopSelling/> */}
            <ProductBanner2/>
        </div>
        </>
    );
};

export default Home;