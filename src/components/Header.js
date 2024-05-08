import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header className='header'>
            <div>
                <h1>
                    <Link to="/" className='logo'>
                        Shopping Hub
                    </Link>
                </h1>
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className='cart'>
                            <i className='fas fa-shopping-cart'/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header