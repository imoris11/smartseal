import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../static/img/logo.svg';
import mobileLogo from '../../static/img/mobile-logo.svg';
import close from '../../static/icon/close.png';
import menu from '../../static/icon/menu.png';
import retail from '../../static/img/retail.png';
import medicine from '../../static/img/medicine.png';
import parts from '../../static/img/engineering.png';
import './header.css';

const MobileDropDown = () => (
  <div className='market-dropdown' id='mobile-market-dropdown'>
    <div className='center'>
      <NavLink to='/fashion' className='col'>
        <img src={retail} alt='' width='100vw' style={{ margin: '2px' }} />
        <p>Retail/Luxury</p>
      </NavLink>
      <NavLink to='/pharmaceutical' className='col'>
        <img src={medicine} alt='' width='100vw' style={{ margin: '2px' }} />
        <p>Pharmaceutical</p>
      </NavLink>
      <NavLink to='engineering' className='col'>
        <img src={parts} alt='' width='100vw' style={{ margin: '2px' }} />
        <p>Engineering</p>
      </NavLink>
    </div>
  </div>
);
const DesktopDrown = ({ dropped, setDropped }) => (
  <div className='container' style={{ background: 'white' }}>
    <div
      className='row market-dropdown'
      id='desktop-market-dropdown'
      onClick={() => setDropped(!dropped)}
    >
      <NavLink to='fashion' className='col-3 item'>
        <img src={retail} alt='' />
        <h4>Retail/Luxury</h4>
        <p>Unique Consumer Experiences Means Better Brand Outlook.</p>
      </NavLink>
      <NavLink to='pharmaceutical' className='col-3 item'>
        <img src={medicine} alt='' />
        <h4>Pharmaceutical</h4>
        <p>Verifiable Products Means Better Consumer Safety.</p>
      </NavLink>
      <NavLink to='engineering' className='col-3 item'>
        <img src={parts} alt='' />
        <h4>Engineering</h4>
        <p>
          From easier access to technical information to better production
          lead-time.
        </p>
      </NavLink>
    </div>
  </div>
);

const Menu = ({ setOpen, dropped, setDropped }) => (
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
      <div
        to={'/about'}
        className='menu-item'
        id='dropdown'
        onClick={() => setDropped(!dropped)}
      >
        Market <span className='caret'></span>
      </div>
      {dropped ? <MobileDropDown /> : null}
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
  const [dropped, setDropped] = useState(false);

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
      if (percentage.toFixed(0) >= 80) {
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
      {open ? (
        <Menu setOpen={setOpen} dropped={dropped} setDropped={setDropped} />
      ) : null}

      <div className='container navigation'>
        <button
          type='button'
          className='menu-control-button'
          onClick={() => setOpen(!open)}
        >
          <img src={open ? close : menu} alt={''} />
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
        <button type='submit' className='btn  contact-button'>
          <Link to='/contact'>Contact us</Link>
        </button>
      </div>
      {dropped ? (
        <DesktopDrown dropped={dropped} setDropped={setDropped} />
      ) : null}
    </div>
  );
}
