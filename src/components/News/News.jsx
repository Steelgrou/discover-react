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
            slidesPerView={3.5}
            spaceBetween={30}
            freeMode={true}

            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: true,

            // }}

            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper"

          >
            <SwiperSlide>
              <div className="news-swiper news-swiper__first">
                <img className='news-swiper__img' src={newsFirst} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-12-19</p>
                </div>
                <h3 className='news-swiper__text'>Компания Discover Invest поздравляет всех с наступающим 2023 годом!</h3>
                <a href='https://di.uz/blog-single/16' className='news-swiper__link'>Подробнее</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__second">
                <img className='news-swiper__img' src={newsSecond} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2023-01-27</p>
                </div>
                <h3 className='news-swiper__text'>ДЕНЬ ПРИНЯТИЯ КОНСТИТУЦИИ РЕСПУБЛИКИ УЗБЕКИСТАН</h3>
                <h5 className='news-swiper__link'>Подробнее</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__third">
                <img className='news-swiper__img' src={newsThird} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-12-31</p>
                </div>
                <h3 className='news-swiper__text'>Мы продолжаем знакомить Вас с многофункциональными объектами Discover Invest.</h3>
                <h5 className='news-swiper__link'>Подробнее</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__fourth">
                <img className='news-swiper__img' src={newsFourth} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-10-02</p>
                </div>
                <h3 className='news-swiper__text'>Кто такой менеджер строительного проекта?</h3>
                <h5 className='news-swiper__link'>Подробнее</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__fifth">
                <img className='news-swiper__img' src={newsFirst} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-12-19</p>
                </div>
                <h3 className='news-swiper__text'>Компания Discover Invest поздравляет всех с наступающим 2023 годом!</h3>
                <h5 className='news-swiper__link'>Подробнее</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__sixth">
                <img className='news-swiper__img' src={newsSecond} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2023-01-27</p>
                </div>
                <h3 className='news-swiper__text'>ДЕНЬ ПРИНЯТИЯ КОНСТИТУЦИИ РЕСПУБЛИКИ УЗБЕКИСТАН</h3>
                <h5 className='news-swiper__link'>Подробнее</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__seventh">
                <img className='news-swiper__img' src={newsThird} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-12-31</p>
                </div>
                <h3 className='news-swiper__text'>Мы продолжаем знакомить Вас с многофункциональными объектами Discover Invest.</h3>
                <h5 className='news-swiper__link'>Подробнее</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__eighth">
                <img className='news-swiper__img' src={newsFourth} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-10-02</p>
                </div>
                <h3 className='news-swiper__text'>Кто такой менеджер строительного проекта?</h3>
                <h5 className='news-swiper__link'>Подробнее</h5>
                
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
