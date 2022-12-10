import React from 'react'
import {Link} from 'react-router-dom'
import SVG from './svg'

import '../../pages/home/home.css'


const Header = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Hey! We are TECH BROS</h4>
          <h1>Build Your Website With Us</h1>
          <p>We specialize in creating fully functional wesites for individuals and small businesses.</p>
          <Link to="/contact" className='btn btn-sm'>Let's Talk</Link>
        </div>
        
        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <SVG className="header__SVG"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header