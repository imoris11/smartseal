import React from 'react';
import brand from '../../static/img/mobile-brand-oil.png';
import './banner.css';

export default function Banner() {
  return (
    <div className={'banner '}>
      <div className='container'>
        <div className='row center' style={{ paddingTop: '25vh' }}>
          <div className='col banner-text text-white'>
            <h1>Secure Identification</h1>
            <h1>For Physical Products</h1>
            <p>Tap Phone On Product To Authenticate</p>
          </div>

          <div className=' col banner-img'>
            <img src={brand} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
