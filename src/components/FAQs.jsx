import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className='faqs'>
        <div className="container faqs__container">
            <h5>Common Questions From Clients</h5>
            <h2>FAQs</h2>

            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer}) =>{
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs