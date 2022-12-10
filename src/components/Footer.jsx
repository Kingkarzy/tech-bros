import React from 'react'
import './../pages/home/home.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
        <div className="container ">
            <div className="footer">
                <a href="/" className="footer__logo"><h4>TECH BROS</h4></a>
                <p>Join the mailing list or follow us on social media to recieve updates about our new services and sales. </p>
               <form action="subscribe.php"> 
                <input type="email" placeholder="Email Address"/>
                <input type="submit" value="Subscribe"/>
               </form>
            </div>

            <div className="footer">
                <h4>Contact Us</h4>
                <div>
                    <p>+234 948 494 0404</p>
                    <Link to="/">www.techbros.com</Link>
                </div>
                <ul className="footer__socials">
                    <li><a href="https://linkedin.com" target='blank'><BsLinkedin /></a></li>
                    <li><a href="https://github.com" target='blank'><BsGithub /></a></li>
                    <li><a href="https://twitter.com" target='blank'><BsTwitter /></a></li>
                </ul>
            </div>

            <div className="footer__copyright">
                <small>Copyright &copy; TECH BROS</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer