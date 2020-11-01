import React from 'react';
import { NavLink } from 'react-router-dom';
import retail from '../../static/img/retail.png';
import medicine from '../../static/img/medicine.png';
import parts from '../../static/img/engineering.png';

export default function MobileDropdown({ open, setOpen, setDropped, dropped }) {
  return (
    <div className='market-dropdown' id='mobile-market-dropdown'>
      <div
        className='center'
        onClick={() => {
          setDropped(!dropped);
          setOpen(!open);
        }}
      >
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
}
