import React from 'react'
import "./Testimonials.css"
import mindy from '../Assets/mindy.jpg'
import melanie from '../Assets/melanie.jpg'
import rose from "../Assets/Rose.jpg"
import mckenzie from '../Assets/mackenzie artman.jpg'
import cindy from '../Assets/cindy.jpg'
import arrowfront from '../Assets/Forward.png'
import arrowback from '../Assets/Back.png'

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <div className='TestimonialMain'>
      <section className="testimonials">
        <div className="t-container">
            <div className="section-header">
                <h2 className="title">Brilliant Reviews</h2>
                <center><hr /></center>
            </div>
            <div className="swiper testimonials-content js-testimonial-slider">
                <Swiper 
                    effect={'coverflow'}
                    grabCursor={true}
                    // slidesPerView={3}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <div className="swiper-slide testimonials-item">
                            <div className="info">
                                <img src={mindy} alt="" />
                                <div className="t-text-box">
                                    <h3 className="name">mindy</h3>
                                    <span className="job">Top customer</span>
                                </div>
                            </div>
                            <p> This is the Best Buy we have done in long time. Super cute, works perfectly for our small family of 3 to have a few waffle hearts from time to time. Easy to use and clean and recipe included is great.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide testimonials-item">
                            <div className="info">
                                <img src={cindy} alt="" />
                                <div className="t-text-box">
                                    <h3 className="name">cindy</h3>
                                    <span className="job">Top customer</span>
                                </div>
                            </div>
                            <p> I love the convenience of just turning knob and cereal appears. No fuss, no mess! I bought the dispenser b/c my 14 yr old can't seem to pour a bowl of cereal w/o spilling it or the milk or both. The container releases one serving at a time per turn of knob. great for clumsy hands in a hurry! No spills at all!, i recommend most items on this website they are very useful</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                       
                        <div className="swiper-slide testimonials-item">
                            <div className="info">
                                <img src={mckenzie} alt="" />
                                <div className="t-text-box">
                                    <h3 className="name">mackenzie artman</h3>
                                    <span className="job">Top Customer</span>
                                </div>
                            </div>
                            <p> I’ve been wanting the warmer+mug combo for awhile but couldn’t fathom spending that much on one, especially when I already love my coffee mugs. Found this warming coaster and it’s perfect. I wish I had bought it sooner! Keeps coffee a good drinking temperature and looks nice.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide testimonials-item">
                            <div className="info">
                                <img src={rose} alt="" />
                                <div className="t-text-box">
                                    <h3 className="name">Rose Rugosa</h3>
                                    <span className="job">Top Customer</span>
                                </div>
                            </div>
                            <p>I love it. It's great. I've convinced SEVERAL people they need it too... and it wasnt hard, they just saw it in action. It's easy to clean if you have the right tool and hard if not. Follow the directions or you'll break it.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>     
                        <div className="swiper-slide testimonials-item">
                            <div className="info">
                                <img src={melanie} alt="" />
                                <div className="t-text-box">
                                    <h3 className="name">melanie</h3>
                                    <span className="job">Top customer</span>
                                </div>
                            </div>
                            <p> I am very pleased with my purchase of the PopBabies Portable Blender. It is a great product that is easy to use and perfect for making smoothies on the go. I love that it is small and lightweight, making it easy to take with me wherever I go. The blender is powerful and blends ingredients quickly and efficiently. I highly recommend this product to anyone looking for a convenient and reliable blender.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <img src={arrowback} className='arrow-back-outline' width={20} alt="arrowback" />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <img src={arrowfront} className='arrow-forward-outline' width={20} alt="arrowfront" />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
            <div className="swiper-pagination js-testomonials-pagination"></div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
