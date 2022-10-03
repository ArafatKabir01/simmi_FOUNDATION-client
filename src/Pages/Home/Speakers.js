import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Speakers =()=>{

   
    return(
        <div className='container m-auto  mt-44 mb-20'>
            <div  className="w-full bg-cover m-auto">
              <h2  className='text-5xl font-bold text-center mb-12 mt-12  shadow-md p-3 m-auto'>Our Prominent Speakers</h2>
              </div>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className='text-center'><div className="avatar flex justify-center  p-2">
  <div className="w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 h-20 md:h-30 lg:h-40  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" />
  </div>
</div>
<p className='font-bold p-2 text center '>Naveen Kumar Goyat</p>
</SwiperSlide>
        <SwiperSlide className='text-center'><div className="avatar flex justify-center p-2">
  <div className=" w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://simmifoundation.org/home/images/speakers/abhimanyu.jpeg" />
  </div>
</div>
<p className='font-bold p-2 text center'>Naveen Kumar Goyat</p>
</SwiperSlide>
        <SwiperSlide className='text-center'><div className="avatar flex justify-center p-2">
  <div className="w-34 w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://simmifoundation.org/home/images/speakers/mohit_chillar.jpg" />
  </div>
</div>
<p className='font-bold p-2 text center'>Naveen Kumar Goyat</p></SwiperSlide>
        <SwiperSlide className='text-center'><div className="avatar flex justify-center p-2">
  <div className="w-34 w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://simmifoundation.org/home/images/speakers/naveen_kumar_goyat.jpg" />
  </div>
</div>
<p className='font-bold p-2 text center'>Naveen Kumar Goyat</p>
</SwiperSlide>
        <SwiperSlide className='text-center'><div className="avatar flex justify-center p-2">
  <div className="w-34 w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
<p className='font-bold p-2 text center'>Naveen Kumar Goyat</p>
</SwiperSlide>
        <SwiperSlide className='text-center'><div className="avatar flex justify-center p-2">
  <div className="w-34 w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://simmifoundation.org/home/images/speakers/vikas_kandola.jpg" />
  </div>
</div>
<p className='font-bold p-2 text center'>Naveen Kumar Goyat</p>
</SwiperSlide>
        <SwiperSlide className='text-center'><div className="avatar flex justify-center p-2">
  <div className="w-34 w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
<p className='font-bold p-2 text center'>Naveen Kumar Goyat</p>
</SwiperSlide>
        <SwiperSlide className='text-center'><div className="avatar flex justify-center p-2">
  <div className="w-34 w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
<p className='font-bold p-2 text center'>Naveen Kumar Goyat</p>
</SwiperSlide>
        <SwiperSlide className='text-center'><div className="avatar flex justify-center p-2">
  <div className="w-34 w-20 md:w-40 lg:w-40 h-20 md:h-30 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
<p className='font-bold p-2 text center'>Naveen Kumar Goyat</p>
</SwiperSlide>
      </Swiper>

        </div>
    )
}
export default Speakers