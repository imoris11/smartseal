import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../static/img/logo.svg';
import mobileLogo from '../../static/img/mobile-logo.svg';
import close from '../../static/icon/close.png';
import menu from '../../static/icon/menu.png';
import './header.css';

const Menu = ({ setOpen }) => (
  <div className='menu'>
    <div className='brand'>
      <Link className='menu-logo' href='/'>
        <img src={mobileLogo} alt={''} className='mobile' />
      </Link>
      <button
        type='button'
        className='menu-control-button'
        onClick={() => setOpen()}
      >
        <img src={close} alt={''} />
      </button>
    </div>
    <div className='menu-items'>
      <NavLink to={'/'} className='menu-item'>
        Home
      </NavLink>

      <NavLink to={'/about'} className='menu-item'>
        About
      </NavLink>

      <NavLink to={'/features'} className='menu-item'>
        Features
      </NavLink>
      <NavLink to={'/about'} className='menu-item'>
        Market <span className='caret'></span>
      </NavLink>
      <NavLink to={'/blog'} className='menu-item'>
        Blog
      </NavLink>
    </div>
  </div>
);

let listener = null;
export default function Header() {
  const [scrollState, setScrollState] = useState('top');
  const [bottom, setBottom] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    listener = document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      let contentHeight = document.body.clientHeight;
      let percentage = (scrolled / contentHeight) * 100;

      if (scrolled >= 120) {
        if (scrollState !== 'amid') {
          setScrollState('amid');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
      if (percentage.toFixed(0) >= 85) {
        setBottom(true);
      } else setBottom(false);
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState, bottom]);
  return (
    <div
      className={` ${scrollState === 'top' ? '' : 'header-amid'} ${
        bottom ? 'header-bottom' : ''
      } header`}
    >
      {open ? <Menu setOpen={setOpen} /> : null}

      <div className='container navigation'>
        <button
          type='button'
          className='menu-control-button'
          onClick={() => setOpen(!open)}
        >
          <img src={open ? close : menu} alt={''} />
        </button>
        <Link className='brand-logo' href='/'>
          <img
            src={scrollState === 'top' ? logo : mobileLogo}
            alt={''}
            className='desktop'
          />
          <img src={mobileLogo} alt={''} className='mobile' />
        </Link>
        <div className='nav-items'>
          <NavLink to={'/'} className='nav-item'>
            Home
          </NavLink>

          <NavLink to={'/about'} className='nav-item'>
            About
          </NavLink>

          <NavLink to={'/features'} className='nav-item'>
            Features
          </NavLink>
          <NavLink to={'/about'} className='nav-item'>
            Market <span className='caret'></span>
          </NavLink>
          <NavLink to={'/blog'} className='nav-item'>
            Blog
          </NavLink>
        </div>
        <button type='submit' className='btn  contact-button'>
          Contact us
        </button>
      </div>
    </div>
  );
}
