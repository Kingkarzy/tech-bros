import React from 'react'
import './home.css'
import Header from '../../components/header/MainHeader'
import Services from '../../components/Services'
import Categories from '../../components/Categories'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Categories />
      <Testimonials />
    </>
  )
}

export default Home