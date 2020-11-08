import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../static/img/logo.svg';
import mobileLogo from '../../static/img/mobile-logo.svg';
import menu from '../../static/icon/menu.png';
import './header.css';
import DesktopDropdown from './desktop-dropdown';
import Menu from './menu';

let listener = null;
export default function Header() {
  const [scrollState, setScrollState] = useState('top');
  const [bottom, setBottom] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [locate, setLocate] = useState('');

  useEffect(() => {
    setLocate(window.location.pathname);
    let scrolled = document.scrollingElement.scrollTop;

    if (scrolled >= 120) {
      if (scrollState !== 'amid') {
        setScrollState('amid');
      }
    }
  }, [scrollState]);

  useEffect(() => {
    listener = document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      let contentHeight = document.body.clientHeight;
      let percentage = ((scrolled / contentHeight) * 100).toFixed(0);

      if (scrolled >= 120) {
        if (scrollState !== 'amid') {
          setScrollState('amid');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
      if (percentage >= 80 && contentHeight >= 3300) {
        setBottom(true);
      } else if (percentage >= 75 && contentHeight <= 3299) {
        setBottom(true);
      } else if (percentage >= 70 && contentHeight <= 2500) {
        setBottom(true);
      } else if (percentage >= 60 && contentHeight <= 2000) {
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
      {/* {open ? ( */}
      <Menu
        setOpen={setOpen}
        open={open}
        dropped={dropped}
        setDropped={setDropped}
      />
      {/* ) : null} */}
      <div className='majinboo'></div>
      <div className='container navigation'>
        <button
          type='button'
          className='menu-control-button'
          onClick={() => setOpen(!open)}
        >
          <img src={menu} alt={''} />
        </button>
        <Link to='' className='brand-logo' href='/'>
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
          <NavLink
            to={window.location.pathname}
            onClick={() => setDropped(!dropped)}
            className='nav-item'
          >
            Market <span className='caret'></span>
          </NavLink>
          <NavLink to={'/blog'} className='nav-item'>
            Blog
          </NavLink>
        </div>
        <button
          type='submit'
          className={`btn contact-button ${
            locate === '/contact' || locate === '/about' ? 'damn' : ''
          }`}
        >
          <Link to='/contact'>Contact Us</Link>
        </button>
      </div>
      {dropped ? (
        <DesktopDropdown dropped={dropped} setDropped={setDropped} />
      ) : null}
    </div>
  );
}
