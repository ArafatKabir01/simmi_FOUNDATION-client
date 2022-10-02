import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner =()=>{
    return(
        <div>
            
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="BannerSwiper "
        
      >
        <SwiperSlide className='BannerSwiper-slide'><div className="min-h-screen bg-no-repeat bg-cover bg-opacity-60" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/education-day-assortment-with-copy-space_23-2148721275.jpg?w=1380&t=st=1664706487~exp=1664707087~hmac=9ee9836bda624632626a2cc98af08e3dcc568832b93eea1ea528e1a9ce05b2fe")` }}>
        
                                                        <div className="p-10 md:p-48 lg:p-56  ">
                                                            <div className="max-w-sm md:max-w-xl lg:max-w-xl rounded-lg shadow-2xl bg-transparent p-10">
                                                            <h1 className="mb-5 text-white text-1xl md:text-4xl lg:text-4xl font-bold "><span className='text-amber-600 text-2xl md:text-6xl lg:text-6xl'>Education </span>is the passport of the future,for tomorrow belong to those who prepare for it today</h1>
                                                            <img src='https://demo.curlythemes.com/qr/wp-content/plugins/simple-qr/qr-generator.php?size=160&type=url&url=https://demo.curlythemes.com/qr/qr-codes-demo/'></img>
                                                            <button className="btn mt-8  bg-amber-600">DONATE US</button>
                                                            </div>
                                                        </div></div></SwiperSlide>
                                                        
                                                        
                                                        <SwiperSlide className='BannerSwiper-slide'><div className="min-h-screen bg-no-repeat bg-cover bg-opacity-60" style={{ backgroundImage: `url("https://idronline.org/wp-content/uploads/2020/12/girl-reading-texbook-pxhere-copy.jpg")` }}>
                                                        <div  className="p-10 md:p-48 lg:p-56 ">
                                                            <div style={{ backgroundImage: `url("https://www.pngmart.com/files/16/Blur-Pattern-PNG-Image.png")` }} className="max-w-sm md:max-w-xl lg:max-w-xl rounded-lg shadow-2xl bg-no-repeat bg-cover p-10">
                                                            <h1 className="mb-5 text-white text-1xl md:text-4xl lg:text-4xl font-bold "><span className='text-amber-600 text-2xl md:text-5xl lg:text-5xl'>Education </span>others by arranging education campaing in rural area's</h1>
                                                            <img src='https://demo.curlythemes.com/qr/wp-content/plugins/simple-qr/qr-generator.php?size=160&type=url&url=https://demo.curlythemes.com/qr/qr-codes-demo/'></img>
                                                            <button className="btn mt-8  bg-amber-600">DONATE US</button>
                                                            </div>
                                                        </div></div></SwiperSlide>
                                                        <SwiperSlide className='BannerSwiper-slide'><div className="min-h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://media.istockphoto.com/photos/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring-picture-id1181859042?k=20&m=1181859042&s=612x612&w=0&h=HYJg5wgy4nr8_otAl6nNgmXSlTVtfJ9Aa9CUAxl5FHc=")` }}>
                                                        <div className="p-10 md:p-48 lg:p-56">
                                                            <div className="max-w-sm md:max-w-xl lg:max-w-xl rounded-lg shadow-2xl bg-transparent p-10">
                                                            <h1 className="mb-5 text-white text-1xl md:text-4xl lg:text-4xl font-bold "><span className='text-blue-900 text-2xl md:text-6xl lg:text-6xl'>Agriculture </span>is the backbone of the livehood security.</h1>
                                                            <img src='https://demo.curlythemes.com/qr/wp-content/plugins/simple-qr/qr-generator.php?size=160&type=url&url=https://demo.curlythemes.com/qr/qr-codes-demo/'></img>
                                                            <button className="btn mt-8  bg-amber-600">DONATE US</button>
                                                            </div>
                                                        </div></div></SwiperSlide>
      </Swiper>
                </div>
              
        
    )

}
export default Banner;