import React from 'react';
import brand from '../../static/imgs/mobile-brand-oil.png';
import './banner.css';

export default function Banner() {
  return (
    <div className={'banner '}>
      <div className='container '>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-6 banner-text'>
            <h1>Secure Identification</h1>
            <h1>For Physical Products</h1>
            <p>Tap Phone On Product To Authenticate</p>
          </div>

          <div className='col-xs-12 col-sm-6 col-md-6 banner-img'>
            <img src={brand} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
