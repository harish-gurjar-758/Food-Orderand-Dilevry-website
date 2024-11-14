import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='Menu'>
      <div className='menu-nav'>
        <img
          src="https://demo.hasthemes.com/aahar-preview/aahar/images/logo/foody.png"
          alt="logo"
          className="logo"
        />
        <ul>
          <Link className='react-app-link' to='/home'>Home</Link>
          <Link className='react-app-link' to='/menu'>Menu</Link>
        </ul>
      </div>
    </div>
  )
}
