import React from 'react'
import {BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import './nav.css'

const Nav = () => {
  return (
    <nav>
        <div class="container nav__container">
            <a href="index.html>"><h3>TECH BROS</h3></a>
            <ul class="nav__menu">
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

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
});


const menu = document.querySelector(".nav__menu");
const menuBtn= document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display= "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

export default Nav