import React from 'react'
import "./Projects.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
// img
import projectCardFirst from '/project-card-first.webp'
import projectCardSecond from '/project-card-second.webp'
import projectCardThird from '/project-card-third.webp'
import projectCardFourth from '/project-card-fourth.webp'
import projectCardFifth from '/project-card-fifth.webp'
import projectCardSixth from '/project-card-sixth.webp'

export default function Projects() {

  return (
    <section>
      <div className="container">
        <div className='project-wrapper'>
          <div className='project-before'>
            <h2 className='project-title'>Наши</h2>
            <h4 className='project-subtitle'>премущества</h4>
          </div>
          <div className="project-cards">
            <div className="project-card">
              <img className='project-card__img' src={projectCardFirst} alt="" />
              <p className='project-card__title'>Magic City</p>
              <p className='project-card__subtitle '>Это масштабный социально-значимый проект. Культурно-развлекательный кластер в Ташкенте является одной из новых достопримечательностей.</p>
            </div>

            <div className="project-card">
              <img className='project-card__img' src={projectCardSecond} alt="" />
              <p className='project-card__title'>Boulevard</p>
              <p className='project-card__subtitle second-card__subtitle'>Многофункциональный жилой комплекс, созданный для обеспечения комфорта жителям Узбекистана.</p>
            </div>


            <div className="project-card">
              <img className='project-card__img' src={projectCardThird} alt="" />
              <p className='project-card__title'>Gardens Residence</p>
              <p className='project-card__subtitle third-card__subtitle'>Грандиозный жилой квартал в сердце столицы.</p>
            </div>

            <div className="project-card">
              <img className='project-card__img' src={projectCardFourth} alt="" />
              <p className='project-card__title'>Fonon</p>
              <p className='project-card__subtitle fourth-card__subtitle'>Fonon – завод по производству ювелирных изделий в Узбекистане построенный на основе итальянских в 2020 году. Fonon является единственным крупным предприятием в Средней Азии, производящим украшения из драгоценных металлов в европейском и восточном стиле</p>
            </div>

            <div className="project-card">
              <img className='project-card__img' src={projectCardFifth} alt="" />
              <p className='project-card__title'>Invento</p>
              <p className='project-card__subtitle fifth-card__subtitle'>Международный детский сад и школа расположенный в международном деловом центре Tashkent City.</p>
            </div>

            <div className="project-card">
              <img className='project-card__img' src={projectCardSixth} alt="" />
              <p className='project-card__title'>Президентская школа</p>
              <p className='project-card__subtitle sixth-card__subtitle'>Это образовательное учреждение, которое даёт знание на международном уровне.</p>
            </div>

          </div>
        </div>
        <div className="project-btn">
          <Link to="/Projectpage"><Button variant="third">Все проекты</Button></Link>
        </div>

      </div>
    </section>
  )
}
