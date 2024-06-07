import React from 'react'
import "./About.css"

export default function About() {
  return (
    <section>
      <div className="about-section">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-left">
              <span></span>
              <h4>О компании</h4>
              <h2>DISCOVER INVEST</h2>
              <p>Мы не просто создаём проекты, мы создаем новые возможности. Строя объекты государственного масштаба, мы строим будущее.
                Мы заботимся об окружающей среде: компания берет на себя полную ответственность за экологические аспекты, связанные со строительством и эксплуатацией зданий и инфраструктуры
              </p>
            </div>
            <div className="about-right">
              <div className="about-cards">
                <div className="about-card visibility">
                  <h2></h2>
                  <h5></h5>
                </div>
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
                <a href='/aboutpage' className="about-card__bg">
                  <span>О компании</span>
                  
                </a>
                <div className="about-card">
                  <h2>9+</h2>
                  <h5>Больницы</h5>
                </div>
                <div className="about-card visibility">
                  <h2></h2>
                  <h5></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
