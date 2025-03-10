import React from 'react';
import { NavLink } from 'react-router-dom';
import retail from '../../static/imgs/retail.png';
import medicine from '../../static/imgs/medicine.png';
import parts from '../../static/imgs/blade.png';

export default function DesktopDropdown({ dropped, setDropped }) {
  return (
    <div
      className='container desktop-market-dropdown-bg'
      style={{ background: 'white' }}
    >
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
}
