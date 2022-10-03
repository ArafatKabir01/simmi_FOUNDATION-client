import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
const Partner =()=>{
    return(
        <div className='container m-auto mb-32'>
            <h2 className='text-5xl font-bold text-center mb-12 pt-12 overflow-hidden'>Our Partners</h2>
            <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="avatar flex justify-center  mt-6 ">
            <div className="w-52 rounded ">
                <img src="https://simmifoundation.org/home/images/our_partners/mirandahouse_logo.png" />
            </div>
            
            </div>
            <p className='font-bold text-center pt-2'>Naveen Kumar Goyat</p>
            </SwiperSlide>
            <SwiperSlide><div className="avatar flex justify-center  mt-6 ">
            <div className="w-52 rounded ">
                <img src="https://simmifoundation.org/home/images/our_partners/iitbhilai_logo.png" />
            </div>
            
            </div>
            <p className='font-bold text-center pt-2'>Naveen Kumar Goyat</p>
            </SwiperSlide>
            <SwiperSlide><div className="avatar flex justify-center  mt-6 ">
            <div className="w-52 rounded ">
                <img src="https://simmifoundation.org/home/images/our_partners/sri_venkateswara_logo.jpeg" />
            </div>
            
            </div>
            <p className='font-bold text-center pt-2'>Naveen Kumar Goyat</p>
            </SwiperSlide>
            <SwiperSlide><div className="avatar flex justify-center  mt-6 ">
            <div className="w-52 rounded ">
                <img src="https://simmifoundation.org/home/images/our_partners/tiss_logo.png" />
            </div>
            
            </div>
            <p className='font-bold text-center pt-2'>Naveen Kumar Goyat</p>
            </SwiperSlide>
            <SwiperSlide><div className="avatar flex justify-center  mt-6 ">
            <div className="w-52 rounded ">
                <img src="https://simmifoundation.org/home/images/our_partners/lpu_logo.png" />
            </div>
            
            </div>
            <p className='font-bold text-center pt-2'>Naveen Kumar Goyat</p>
            </SwiperSlide> 
            <SwiperSlide><div className="avatar flex justify-center  mt-6 ">
            <div className="w-52 rounded ">
                <img src="https://simmifoundation.org/home/images/our_partners/lpu_logo.png" />
            </div>
            
            </div>
            <p className='font-bold text-center pt-2'>Naveen Kumar Goyat</p>
            </SwiperSlide>        
      </Swiper>


        </div>
    )
}
export default Partner;