import React from 'react'
import './home.css'
import Header from '../../components/header/MainHeader'
import Services from '../../components/Services'
import Experiences from '../../components/Experiences'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Experiences />
      <Testimonials />
    </>
  )
}

export default Home