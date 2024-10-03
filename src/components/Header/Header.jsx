import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <nav className='nav'>
        <ul className='nav-list'>
            <li className='nav-list__item nav-list__item--bold'><a className='nav-list__link' href="/">total joy studio</a></li>
            <div className='nav-list'>
            <li className='nav-list__item'><a className='nav-list__link' href="/about">projects</a></li>
            <li className='nav-list__item'><a className='nav-list__link' href="/contact">contact</a></li>
            </div>
        </ul>
    </nav>
  )
}

export default Header