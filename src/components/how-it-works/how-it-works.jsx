import React from 'react';
import brand from '../../static/img/the-brand.png';

export default function HowItWorks() {
  return (
    <div className='protection'>
      <div className='container'>
        <div className={'row space-between'}>
          <div className={'col-md-4'}>
            <img src={brand} alt='' />
          </div>
          <div className={'col-md-2'}></div>
          <div className={'col-md-4'}>
            <h1>Counterfeit & Forgery Protection</h1>
            <p>
              Our multi-purpose tags, fitted with bank-grade encryption, allow
              end-to-end authentication for products, providing protection for
              brands and instilling confidence in brand promise for loyal,
              brand-conscious consumers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
