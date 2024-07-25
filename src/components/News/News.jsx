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
                <div className="news-swiper__bottom-blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-12-19</p>
                </div>
                <a className='news-swiper__text' href='https://di.uz/blog-single/15'>Компания Discover Invest поздравляет всех с наступающим 2023 годом!</a>
                <a className='news-swiper__link' href='https://di.uz/blog-single/15' >Подробнее</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__second">
                <img className='news-swiper__img' src={newsSecond} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__bottom-blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2023-01-27</p>
                </div>
                <a className='news-swiper__text' href='https://di.uz/blog-single/5'>ДЕНЬ ПРИНЯТИЯ КОНСТИТУЦИИ РЕСПУБЛИКИ УЗБЕКИСТАН</a>
                <a className='news-swiper__link' href='https://di.uz/blog-single/5'>Подробнее</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__third">
                <img className='news-swiper__img' src={newsThird} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__bottom-blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-12-31</p>
                </div>
                <a className='news-swiper__text' href='https://di.uz/blog-single/6'>Мы продолжаем знакомить Вас с многофункциональными объектами Discover Invest.</a>
                <a className='news-swiper__link' href='https://di.uz/blog-single/6'>Подробнее</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__fourth">
                <img className='news-swiper__img' src={newsFourth} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__bottom-blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-10-02</p>
                </div>
                <a className='news-swiper__text' href='https://di.uz/blog-single/16'>Кто такой менеджер строительного проекта?</a>
                <a className='news-swiper__link' href='https://di.uz/blog-single/16'>Подробнее</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__first">
                <img className='news-swiper__img' src={newsFirst} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__bottom-blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-12-19</p>
                </div>
                <a className='news-swiper__text' href='https://di.uz/blog-single/15'>Компания Discover Invest поздравляет всех с наступающим 2023 годом!</a>
                <a className='news-swiper__link' href='https://di.uz/blog-single/15' >Подробнее</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__second">
                <img className='news-swiper__img' src={newsSecond} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__bottom-blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2023-01-27</p>
                </div>
                <a className='news-swiper__text' href='https://di.uz/blog-single/5'>ДЕНЬ ПРИНЯТИЯ КОНСТИТУЦИИ РЕСПУБЛИКИ УЗБЕКИСТАН</a>
                <a className='news-swiper__link' href='https://di.uz/blog-single/5'>Подробнее</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__third">
                <img className='news-swiper__img' src={newsThird} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__bottom-blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-12-31</p>
                </div>
                <a className='news-swiper__text' href='https://di.uz/blog-single/6'>Мы продолжаем знакомить Вас с многофункциональными объектами Discover Invest.</a>
                <a className='news-swiper__link' href='https://di.uz/blog-single/6'>Подробнее</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-swiper news-swiper__fourth">
                <img className='news-swiper__img' src={newsFourth} alt="" />
                <div className="news-swiper__blur"></div>
                <div className="news-swiper__bottom-blur"></div>
                <div className="news-swiper__before">
                  <p className='news-swiper__date'>2022-10-02</p>
                </div>
                <a className='news-swiper__text' href='https://di.uz/blog-single/16'>Кто такой менеджер строительного проекта?</a>
                <a className='news-swiper__link' href='https://di.uz/blog-single/16'>Подробнее</a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
