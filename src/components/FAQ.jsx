import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'


const FAQ = ({question, answer}) => {
    const [isFAQShowing, setIsFAQShowing] = useState(false);
  
    return (
    <article className='faq' onClick={() => setIsFAQShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className='faq__icon'>
                {
                    isFAQShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
        </div>
        <p className={`${isFAQShowing ? 'show__faq': 'hide__faq'}`}>{answer}</p>
    </article>
  )
}

export default FAQ