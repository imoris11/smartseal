import React from 'react';
import chain from '../../static/img/chain-of-study.svg';
import chain2 from '../../static/img/product-and-custod.svg';
import registration from '../../static/img/product-registration.svg';
import registration2 from '../../static/img/registrate.svg';
import './registration.css';

export default function Registration() {
  return (
    <div className='registration'>
      <div className='container'>
        <div className={'row center'}>
          <div className='col-sm-12 col-sm-6 col-md-5 registration-text'>
            <h1 className='display-desktop'>
              Digital Registration
              <br /> & Chain of Custody
            </h1>
            <h1 className='display-mobile'>
              Digital Registration & Chain of Custody
            </h1>
            <p style={{ paddingTop: '40px' }}>
              Product registration builds brand loyalty and is the basis of a
              strong customer relationship. It is key to providing enhanced
              post-sales service and support.
            </p>
            <p style={{ paddingTop: '40px' }}>
              Leverage this feature to share enhancements and new releases,
              validate warranties and service agreements, cross-sell, and get
              feedback on the purchase process.
            </p>
          </div>

          <div className={'col-sm-12 col-sm-6 col-md-7 registration-img'}>
            <img src={registration} alt='' className='display-desktop' />
            <img src={registration2} alt='' className='display-mobile' />
            <img src={chain} alt='' className='floating-img display-desktop' />
            <img src={chain2} alt='' className='floating-img display-mobile' />
          </div>
        </div>
      </div>
    </div>
  );
}
