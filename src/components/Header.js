import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

function Header({ cartItems }) {
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
              <Link to="/addproduct">Add Product</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/reviews">
                <i className="fas fa-eye" /> Reviews {/* Eye icon */}
              </Link>
            </li>
            <li>
              <Link to="/cart" className='cart'>
                <i className='fas fa-shopping-cart' />
                <span className='cart-num'>
                  {cartItems.length === 0 ? "" : cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
