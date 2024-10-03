import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <nav className='footer-nav'>
    <ul className='footer-nav-list'>
        <li className='footer-nav-list__item footer-nav-list__item--bold'><a className='footer-nav-list__link' href="/">danielleadairbruce@gmail.com</a></li>
        <div className='footer-nav-list'>
        <li className='footer-nav-list__item'><a className='footer-nav-list__link' href="/about">3057106467</a></li>
        </div>
    </ul>
    </nav>
  )
}

export default Footer