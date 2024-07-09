import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import './Team.css'





import xusanovA from '/xusanovA.webp'
import boltaevO from '/boltaevO.webp'
import norbekovSh from '/norbekovSh.webp'
import artiqbaevS from '/artiqbaevS.webp'
import kuzievJ from '/kuzievJ.webp'

export default function Team() {
  return (
    <div>
      <div className="container">


        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}

          pagination={{
            clickable: true,
          }}
          loop={true} 
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,

          }}

          modules={[FreeMode, Autoplay, Navigation]}
          className="mySwiper"

        >
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={xusanovA} alt="" />
              <h3 className='team-swiper__name'>Xusanov Akromjon Turaxon o'g'li</h3>
            </div>
            <h5 className='team-swiper__job'>Project Manager</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={norbekovSh} alt="" />
              <h3 className='team-swiper__name'>Norbekov Shavkat Bo'riboy o'g'li</h3>
            </div>
            <h5 className='team-swiper__job'>Project Manager</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={artiqbaevS} alt="" />
              <h3 className='team-swiper__name'>Artiqbaev Saxobiddin Doniyor o'g'li</h3>
            </div>
            <h5 className='team-swiper__job'>Project Manager</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={kuzievJ} alt="" />
              <h3 className='team-swiper__name'>Kuziev Jakhongir Bakhodirovich</h3>
            </div>
            <h5 className='team-swiper__job'>Construction site supervisor</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={boltaevO} alt="" />
              <h3 className='team-swiper__name'>Boltaev Obidjon Uchqin o'g'li</h3>
            </div>
            <h5 className='team-swiper__job'>Project Manager</h5>
          </SwiperSlide>

        </Swiper></div>
    </div>



  )
}
