import React from 'react'
import { Link } from 'react-router-dom'
import './../pages/home/home.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <div className="">
                <a href="/" className="footer__logo"><h4>TECH BROS</h4></a>
                <p>Join the mailing list or follow us on social media to recieve updates about our new services and sales. </p><br/>
               <form action="subscribe.php"> 
                <input type="email" placeholder="Email Address"/>
                <input className="submit" type="submit" value="Subscribe"/>
               </form>
            </div>

            <div className="footer">
                <h4>Contact Us</h4>
                <div>
                    <a href="tel:+2349484940404">+234 948 494 0404</a><br/>
                    <Link to="/">www.techbros.com</Link>
                </div>
                <ul className="footer__socials">
                    <li><a href="https://linkedin.com" target='blank' rel='noreferrer noopener'><BsLinkedin /></a></li>
                    <li><a href="https://github.com" target='blank'rel='noreferrer noopener'><BsGithub /></a></li>
                    <li><a href="https://twitter.com" target='blank'rel='noreferrer noopener'><BsTwitter /></a></li>
                </ul>
            </div>
        </div>
        <div className="footer__copyright">
                <small>Copyright &copy; TECH BROS</small>
        </div>
    </footer>
  )
}

export default Footer