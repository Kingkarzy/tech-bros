import React from 'react'
import './home.css'
import Header from '../../components/header/MainHeader'
import Services from '../../components/Services'
import Experiences from '../../components/Experiences'
import Testimonials from '../../components/Testimonials'
import FAQs from '../../components/FAQs'

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Experiences />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home