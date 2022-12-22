import React from 'react'
import people from '../../assets/people.png'
import './header.css'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
            <h1 className='gradient__text'>
              Let's Build Something amazing with GPT-3 OpenAI
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, esse. Quo obcaecati veniam aliquid incidunt eos modi veritatis,
              soluta accusantium, natus maxime voluptates sequi vitae quod exercitationem hic commodi accusamus.
            </p>
            <div className='gpt3__header-content__input'>
              <input type="email" placeholder='Enter you Email Address'/>
              <button type='button'>Get Started</button>
            </div>
            <div className="gpt3__header-content__people">
                <img src={people} alt="People" />
                <p>1600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div className="gpt3__header-image">
              <img src={ai} alt="Ai Image" />
        </div>
    </div>
  )
}

export default Header