import React from 'react'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Advantages from '../../components/Advantages/Advantages'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import Entrance from '../../components/Entrance/Entrance'
import Team from '../../components/Team/Team'



export default function Homepage() {
  return (
    <>
      <Header />
      <Entrance/>
      <About />
      <Advantages />
      <Team/>
      <Projects />
      <Footer />
    </>
  )
}
