import React from 'react';
import brand from '../../static/img/tag.png';
import './how-it-works.css';

export default function HowItWorks() {
  return (
    <div className='how-it-works'>
      <div className='container'>
        <div className={'row center'}>
          <div className={'col-xs-12 col-sm-6 col-md-6  desktop'}>
            <img src={brand} alt='' />
          </div>
          <div className={'col-xs-12 col-sm-6 col-md-6'}>
            <h1>How It Works</h1>
            <p>
              Tags are pre-programmed for manufacturing according to client
              specifications.
            </p>
            <hr />
            <p>
              Multi-purpose RFID (Near Field Communication + Ultra High
              Frequency) tags embedded into products.
            </p>
            <hr />
            <p>Consumers purchase authenticated products.</p>
            <hr />
            <p>Consumers register products.</p>
            <hr />
            <p>
              Consumers enjoy unique brand experiences, loyalty, and interactive
              signage infrastructure.
            </p>
          </div>

          <div
            className={'col-xs-12 col-sm-6 col-md-6 how-it-works-img mobile'}
          >
            <img src={brand} alt='' />
          </div>
        </div>
      </div>
      <div className='row tell-us center'>
        <div className={'col-xs-12 col-sm-10 col-md-9'}>
          <h2>You Have Custom Thoughts On How We Can Help?</h2>
          <p>Begin The Conversation Here...</p>
        </div>
        <div className={'col-xs-12 col-sm-2 col-md-3 '}>
          <button className='tell-us-button'>Tell Us</button>
        </div>
      </div>
    </div>
  );
}
