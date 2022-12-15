import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Ali's Store
          </Link>
        </div>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <Link
              to='/'
              className='navbar-items badge rounded-pill text-bg-light'
            >
              Store
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/cart'
              className='navbar-items badge rounded-pill text-bg-dark'
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
