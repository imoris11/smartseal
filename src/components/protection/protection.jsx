import React from 'react';
import brand from '../../static/img/bottle.png';
import './protection.css';

export default function HowItWorks() {
  return (
    <div className='protection'>
      <div className='container'>
        <div className={'row center desktop'}>
          <div className={'col-xs-12 col-sm-6 col-md-6 protection-img'}>
            <img src={brand} alt='' />
          </div>

          <div className={'col-xs-12 col-sm-6 col-md-6 protection-text'}>
            <h1>Counterfeit & Forgery Protection</h1>
            <p>
              Our multi-purpose tags, fitted with bank-grade encryption, allow
              end-to-end authentication for products, providing protection for
              brands and instilling confidence in brand promise for loyal,
              brand-conscious consumers.
            </p>
          </div>
        </div>
        <div className={'row center mobile'}>
          <div className={'col-xs-12 col-sm-6 col-md-6 protection-text'}>
            <h1>Counterfeit & Forgery Protection</h1>
            <p>
              Our multi-purpose tags, fitted with bank-grade encryption, allow
              end-to-end authentication for products, providing protection for
              brands and instilling confidence in brand promise for loyal,
              brand-conscious consumers.
            </p>
          </div>
          <div className={'col-xs-12 col-sm-6 col-md-6 protection-img'}>
            <img src={brand} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
