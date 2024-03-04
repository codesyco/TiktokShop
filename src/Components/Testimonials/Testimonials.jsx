import React from 'react'
import "./Testimonials.css"
import mindy from '../Assets/mindy.jpg'
import melanie from '../Assets/melanie.jpg'
import mckenzie from '../Assets/mackenzie artman.jpg'
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
    <div>
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
                                    <span className="job">web developer</span>
                                </div>
                            </div>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam consequuntur ratione exercitationem earum itaque quibusdam officiis tempora accusamus, temporibus dicta.</p>
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
                                    <span className="job">web developer</span>
                                </div>
                            </div>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam consequuntur ratione exercitationem earum itaque quibusdam officiis tempora accusamus, temporibus dicta.</p>
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
                                    <span className="job">web developer</span>
                                </div>
                            </div>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam consequuntur ratione exercitationem earum itaque quibusdam officiis tempora accusamus, temporibus dicta.</p>
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
                                    <h3 className="name">john doe</h3>
                                    <span className="job">web developer</span>
                                </div>
                            </div>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam consequuntur ratione exercitationem earum itaque quibusdam officiis tempora accusamus, temporibus dicta.</p>
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
                                    <h3 className="name">john doe</h3>
                                    <span className="job">web developer</span>
                                </div>
                            </div>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam consequuntur ratione exercitationem earum itaque quibusdam officiis tempora accusamus, temporibus dicta.</p>
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
