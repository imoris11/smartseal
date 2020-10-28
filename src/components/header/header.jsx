import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../static/img/logo.png';
import './header.css';

let listener = null;
export default function Header() {
  const [scrollState, setScrollState] = useState('top');

  useEffect(() => {
    listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== 'amir') {
          setScrollState('amir');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);
  return (
    <div
      className={
        scrollState === 'top' ? 'header-top header' : 'header-amid header'
      }
    >
      <div className={'container'}>
        <div className='row'>
          <div className='col navigation'>
            <div className={'logo'}>
              <img src={logo} alt={''} />
            </div>

            <div className={'nav-items'}>
              <NavLink to={'/'} className='nav-item'>
                Home
              </NavLink>
              <NavLink to={'/'} className='nav-item'>
                About
              </NavLink>
              <NavLink to={'/'} className='nav-item'>
                Features
              </NavLink>
              <NavLink to={'/'} className='nav-item'>
                Market
              </NavLink>
              <NavLink to={'/'} className='nav-item'>
                Blog
              </NavLink>
            </div>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
