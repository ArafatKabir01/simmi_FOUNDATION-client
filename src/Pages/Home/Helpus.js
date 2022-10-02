import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Helpus.css";

// import required modules
import { Pagination , Autoplay } from "swiper";

const Helpus = () =>{
    return(
        <div>
            <div className="hero min-h-screen">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/CJk9FnY/about.png" className="hover:scale-125 transition duration-700 ease-in-out " />
                    <div className='mt-24'>
                    <h1 className="text-5xl font-bold">How can you help us</h1>
                    <div className='mt-20 mb-12'>
                    <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                        direction={"vertical"}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination ,Autoplay]}
                        className="helpusSwiper"
                    >
                        <SwiperSlide className='helpusSwiper-slide rounded-lg '><div className="card w-96  text-primary-content">
                                                                    <div className="card-body bg-amber-600">
                                                                        <h2 className="card-title text-blue-900">Collaborate</h2>
                                                                        <p>Simmi Foundation serves in the collaboration with schools, colleges and other institutions.</p>
                                                                        <div className="card-actions justify-end">
                                                                        <button className="btn">Collaborate with Us</button>
                                                                        </div>
                                                                    </div>
                                                                    </div></SwiperSlide>
                        <SwiperSlide className='helpusSwiper-slide rounded-lg'><div className="card w-96  text-primary-content">
                                                                <div className="card-body bg-orange-900">
                                                                    <h2 className="card-title">Be a Volunteer</h2>
                                                                    <p>Even the all-powerful Pointing has no control about the<br/> blind texts.</p>
                                                                    <div className="card-actions justify-end">
                                                                    <button className="btn">Read More</button>
                                                                    </div>
                                                                </div>
                                                                </div></SwiperSlide>
                                                                <SwiperSlide className='helpusSwiper-slide rounded-lg'><div className="card w-96  text-primary-content">
                                                                <div className="card-body bg-yellow-800">
                                                                    <h2 className="card-title">Donate Money</h2>
                                                                    <p>Your donation will further our mission of ensuring a happy and healthy life of those in need.</p>
                                                                    <div className="card-actions justify-end">
                                                                    <button className="btn">Donate Now</button>
                                                                    </div>
                                                                </div>
                                                                </div></SwiperSlide>
                    </Swiper>
                    </div>
                    <button className="btn ">Donate now </button>
                    </div>
                </div>
                </div>
                </div>
        </div>
    )
}
export default Helpus;