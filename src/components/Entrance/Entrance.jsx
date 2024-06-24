import React from 'react'
import './Entrance.css'


import bgvideo from "/opening.mp4"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


export default function Entrance() {
    return (
        <section id='entrance-section'>
            <video
                className="entrance-video"
                preload="auto"
                muted
                autoPlay
                loop
                poster="/img/poster.webp"
                playsInline
                webkit-playsinline="true"
            >
                <source src={bgvideo} type="video/mp4" />
                Ваш браузер не поддерживает HTML5 видео.
            </video>

            <div className="entrance-overlay"></div>
            <div className="container">
                
                <div className="entrance-section">

                    <h1> DISCOVER INVEST</h1>
                    <h5>Совершенство во всём</h5>
                    <div className="entrance-btn">
                        <Link to="/Projectpage"><Button variant="first">Проекты</Button></Link>
                        <Link to="/Contact"><Button variant="second">Контакты</Button></Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
