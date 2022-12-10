import React from 'react'
import './../pages/home/home.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Categories = () => {
  return (

<section id="experience">
        <h5>What Skills We Have</h5>
        <h2>Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>NodeJs</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ExpressJs</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Categories

{/* <div className="categories__left">
                <h1>Categories</h1>
                <p></p>
                <a href="/projects" className="btn">Learn More</a>
            </div>

            <div className="categories__right">
                <article className="category">
                    <h4>All Projects</h4>
                    <p>Fully Functional Website</p>
                </article>

                <article className="category">
                    <h4>Web Development/Design</h4>
                    <p>Fully Functional Website</p>
                </article>

                <article className="category">
                    <h4>UI/UX Design</h4>
                    <p>Fully Functional Website</p>
                </article>

                <article className="category">
                    <h4>Branding</h4>
                    <p></p>
                </article>
            </div> */}