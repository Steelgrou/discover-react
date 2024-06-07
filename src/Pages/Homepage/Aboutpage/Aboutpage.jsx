import React from 'react'
import './Aboutpage.css'
//Components
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import EntranceAboutpage from '../../../components/Entrance/EntranceAboutpage'
//Photos link
import firstImg from '/aboutpage-first-section.jpg'
import secondImg from '/aboutpage-second-section.jpg'
import thridImg from '/aboutpage-thrid-section.jpg'
import fourthdImg from '/aboutpage-fourth-section.jpg'

import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'

export default function Aboutpage() {
  return (
    <>
      <Header />
      <EntranceAboutpage />
      <section id='aboutpage-first__section'>
        <div className="container">
          <div className="aboutpage-first__section">
            <div className="aboutpage-left">
              <span></span>
              <h2>О нашей</h2>
              <h3>компании</h3>
              <svg className="aboutpage-first__bg" width="531" height="690" viewBox="0 0 531 690" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.1">
                  <path d="M209.43 70.0665V0H530.972V477.544H437.473L437.525 432.833H488.44V44.7113H251.963V70.0409H412.99V690H0V70.0409H209.405L209.43 70.0665ZM80.4752 641.905H363.766V477.57H244.682L80.4752 641.905ZM209.43 447.549V150.208H254.911V429.885H363.766V118.188H49.2491V607.858L209.43 447.549Z" fill="#8F8F8F"></path>
                </g>
              </svg>
            </div>
            <div className="aboutpage-right">
              <div className="aboutpage-right__bg">
                <img className='aboutpage-right__img' src={firstImg} alt="" />
              </div>
              <p className='aboutpage-right__text'>Мы не просто создаём проекты, мы создаем новые возможности. Строя объекты государственного масштаба, мы строим будущее. Мы заботимся об окружающей среде: компания берет на себя полную ответственность за экологические аспекты, связанные со строительством и эксплуатацией зданий и инфраструктуры.</p>
              <Link to="/Projectpage"><Button variant='first'> Проекты</Button></Link>
            </div>
          </div>

        </div>
      </section>

      <section id='aboutpage-second__section'>
        <div className="container">
          <div className="aboutpage-second__section">
            <div className="aboutpage-left">
              <div className="line-with-circle">
                <div className="circle">1</div>
              </div>

              <h2>Наша миссия</h2>
              <p>Мы внедряем в Узбекистане самые передовые технологии в строительстве и создаём современные дизайнерские решения. Опираясь на первоклассных работников, мы строим доступное жильё и промышленные здания на многие годы.</p>
            </div>
            <div className="aboutpage-right">
              <div className="aboutpage-right__bg">
                <img className='aboutpage-right__img' src={secondImg} alt="" />
              </div>


            </div>
          </div>

        </div>
      </section>

      <section id='aboutpage-second__section'>
        <div className="container">
          <div className="aboutpage-second__section">
            <div className="aboutpage-left">
              <div className="line-with-circle">
                <div className="circle">2</div>
              </div>

              <h2>Наше видение</h2>
              <p>Создание лучшей в Средней Азии проектной компании, которая предоставляет возможность: - Обществу – повышать уровень жизни людей, задавая высокие стандарты в работе - Клиентам – получать удовольствие от совместной деятельности, строить долгосрочные и открытые отношения - Сотрудникам – постоянный карьерный рост как личностный, так и профессиональный.

              </p>
            </div>
            <div className="aboutpage-right">
              <div className="aboutpage-right__bg">
                <img className='aboutpage-right__img' src={thridImg} alt="" />
              </div>


            </div>
          </div>

        </div>
      </section>
      <section id='aboutpage-second__section'>
        <div className="container">
          <div className="aboutpage-second__section">
            <div className="aboutpage-left">
              <div className="line-with-circle">
                <div className="circle">3</div>
              </div>

              <h2>Наши ценности</h2>
              <p>В 2008 году образовалась строительная компания Akfa Construction под брендовым названием Discover Invest. В 2009 году началась работа над первым строительным объектом. Это был завод по производству алюминиевых профилей. В 2011 появилась необходимость в приобретении собственного машинного парка, то есть можно представить какие были объемы у компании, что нам потребовался собственный машинный парк. В 2013 году был образован отдел дизайна и архитектуры.

              </p>
            </div>
            <div className="aboutpage-right">
              <div className="aboutpage-right__bg">
                <img className='aboutpage-right__img' src={fourthdImg} alt="" />
              </div>


            </div>
          </div>

        </div>
      </section>
      <section >
        <div className="container">
          <div className="about-cards gap">

            <div className="about-card">
              <h2>4000+</h2>
              <h5>Количество сотрудников</h5>
            </div>
            <div className="about-card">
              <h2>150+</h2>
              <h5>Объекты</h5>
            </div>
            <div className="about-card">
              <h2>16</h2>
              <h5>Жилые комплексы</h5>
            </div>
            <div className="about-card">
              <h2>14</h2>
              <h5>14 лет на рынке</h5>
            </div>
            <div className="about-card">
              <h2>250+</h2>
              <h5>Спец.техника</h5>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
