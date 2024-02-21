import React from 'react';
import Banner from '../Components/Banner/Banner';
import NewArrival from '../Components/New Arrivals/NewArrival';
import TopSelling from '../Components/Top Selling/TopSelling';
import './CSS/Home.css'

const Home = () => {
    return (
        <>
        <div className='home'>
            <Banner/>
            <NewArrival/>
            <TopSelling/>
        </div>
        </>
    );
};

export default Home;