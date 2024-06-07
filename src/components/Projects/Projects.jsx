import React from 'react'
import "./Projects.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


export default function Projects() {


  return (
    <section>
      <div className="container">
        <div className='project-wrapper'>
          <span></span>
          <h2>Наши</h2>
          <h4>премущества</h4>
          <div className="project-cards">
            <div className="project-card">
              <p>Magic City</p>
            </div>
            <div className="project-card">
              <p>Magic City</p>
            </div>
            <div className="project-card">
              <p>Magic City</p>
            </div>
            <div className="project-card">
              <p>Magic City</p>
            </div>
            <div className="project-card">
              <p>Magic City</p>
            </div>
            <div className="project-card">
              <p>Magic City</p>
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
