import React from 'react';
import chain from '../../static/img/chain-of-study.png';
import registration from '../../static/img/product-registration.png';
import './registration.css';

export default function Registration() {
  return (
    <div className='registration'>
      <div className='container'>
        <div className={'row center'}>
          <div className='col-sm-12 col-sm-6 col-md-6'>
            <h1>Digital Registration & Chain of Custody</h1>
            <p>
              Product registration builds brand loyalty and is the basis of a
              strong customer relationship. It is key to providing enhanced
              post-sales service and support.
            </p>
            <p>
              Leverage this feature to share enhancements and new releases,
              validate warranties and service agreements, cross-sell, and get
              feedback on the purchase process.
            </p>
          </div>

          <div className={'col-sm-12 col-sm-6 col-md-6 registration-img'}>
            <img src={registration} alt='' />
            <img src={chain} alt='' className='floating-img' />
          </div>
        </div>
      </div>
    </div>
  );
}
