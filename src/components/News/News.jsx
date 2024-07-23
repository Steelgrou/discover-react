import React from 'react'
import './News.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

//img swiper
import newsFirst from '/news-swiper-first.webp'
import newsSecond from '/news-swiper-second.webp'
import newsThird from '/news-swiper-third.webp'
import newsFourth from '/news-swiper-fourth.webp'


export default function News() {
  return (
    <section>
      <div className="container">
        <div className="news-wrapper">
          <div className="news-left">
            <h2 className='news-before'>Новости</h2>
            <h2 className='news-title'>компании</h2>
          </div>
          <div className="news-right"></div>
        </div>
        <div className="news-swiper">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}

          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,

          }}

          modules={[FreeMode, Autoplay, Navigation]}
          className="mySwiper"

        >
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={newsFirst} alt="" />
              <h3 className='team-swiper__name'>Xusanov Akromjon Turaxon o'g'li</h3>
            </div>
            <h5 className='team-swiper__job'>Project Manager</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={newsSecond} alt="" />
              <h3 className='team-swiper__name'>Norbekov Shavkat Bo'riboy o'g'li</h3>
            </div>
            <h5 className='team-swiper__job'>Project Manager</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={newsThird} alt="" />
              <h3 className='team-swiper__name'>Artiqbaev Saxobiddin Doniyor o'g'li</h3>
            </div>
            <h5 className='team-swiper__job'>Project Manager</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' src={newsFourth} alt="" />
              <h3 className='team-swiper__name'>Kuziev Jakhongir Bakhodirovich</h3>
            </div>
            <h5 className='team-swiper__job'>Construction site supervisor</h5>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-swiper">
              <img className='team-swiper__img' alt="" />
              <h3 className='team-swiper__name'>Boltaev Obidjon Uchqin o'g'li</h3>
            </div>
            <h5 className='team-swiper__job'>Project Manager</h5>
          </SwiperSlide>

        </Swiper>
        </div>
      </div>
    </section>
  )
}
