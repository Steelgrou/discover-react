import React from 'react'
import "./Projects.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
// img
import projectCardFirst from '/project-card-first.webp'
import projectCardSecond from '/project-card-second.webp'

export default function Projects() {


  return (
    <section style={{ backgroundColor: 'red' }}>
      <div className="container">
        <div className='project-wrapper'>
          <span className='project-wrapper__span'></span>
          <h2>Наши</h2>
          <h4>премущества</h4>
          <div className="project-cards">
            <div className="project-card">
              <img className='project-card__img' src={projectCardFirst} alt="" />
              <p className='project-card__title'>Magic City</p>
              <p className='project-card__subtitle'>Это масштабный социально-значимый проект. Культурно-развлекательный кластер в Ташкенте является одной из новых достопримечательностей.</p>
            </div>

            <div className="project-card">
              <img className='project-card__img' src={projectCardSecond} alt="" />
              <p className='project-card__title'>Magic City</p>
             
            </div>

            {/* <div className="project-card">
              <p>Boulevard</p>
            </div>
            <div className="project-card">
              <p>Gardens Residence</p>
            </div>
            <div className="project-card">
              <p>Fonon</p>
            </div>
            <div className="project-card">
              <p>Invento</p>
            </div>
            <div className="project-card">
              <p>Президентская школа</p>
            </div> */}
          </div>
        </div>
        <div className="project-btn">
          <Link to="/Projectpage"><Button variant="third">Все проекты</Button></Link>
        </div>

      </div>
    </section>
  )
}
