import React from 'react'
import './../pages/home/home.css'

const Categories = () => {
  return (

    <section className="categories" id="categories">
        <div className="container categories__container">
            <div className="categories__left">
                <h1>Categories</h1>
                <p></p>
                <a href="/projects" className="btn">Learn More</a>
            </div>

            <div className="categories__right">
                <article className="category">
                    <h4>All Projects</h4>
                    {/* <!-- <p>Fully Functional Website</p> --> */}
                </article>

                <article className="category">
                    <h4>Web Develoopment/Design</h4>
                    {/* <!-- <p>Fully Functional Website</p> --> */}
                </article>

                <article className="category">
                    <h4>UI/UX Design</h4>
                    {/* <!-- <p>Fully Functional Website</p> --> */}
                </article>

                <article className="category">
                    <h4>Branding</h4>
                    {/* <!-- <p></p> --> */}
                </article>
            </div>
        </div>
    </section>
  )
}

export default Categories