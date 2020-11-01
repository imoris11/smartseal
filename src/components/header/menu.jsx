import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import mobileLogo from '../../static/img/mobile-logo.svg';
import close from '../../static/icon/close.png';
import MobileDropdown from './mobile-dropdown';

export default function Menu({ open, setOpen, dropped, setDropped }) {
  return (
    <div className='menu'>
      <div className='brand'>
        <Link className='menu-logo' href='/'>
          <img src={mobileLogo} alt={''} className='mobile' />
        </Link>
        <button
          type='button'
          className='menu-control-button'
          onClick={() => setOpen(!open)}
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
        <div
          to={'/about'}
          className='menu-item'
          id='dropdown'
          onClick={() => setDropped(!dropped)}
        >
          Market <span className='caret'></span>
        </div>
        {dropped ? (
          <MobileDropdown
            open={open}
            setOpen={setOpen}
            setDropped={setDropped}
            dropped={dropped}
          />
        ) : null}
        <NavLink to={'/blog'} className='menu-item'>
          Blog
        </NavLink>
      </div>
    </div>
  );
}
