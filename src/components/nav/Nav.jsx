import React from 'react'
import {useRef, useEffect} from 'react';
import {BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import './nav.css'

const Nav = () => {
    const ref = useRef(null);
    
    return (
    <nav>
        <div className="container nav__container">
            <a href="index.html>"><h3>TECH BROS</h3></a>
            <ul ref={ref} className="nav__menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
                <button id="open-menu-btn"><BiMenu/></button>
                <button id="close-menu-btn"><IoMdClose/></button>
        </div>
    </nav>
  )
}



/* window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
});
 */
export default Nav