import React from 'react';
import './tell-us.css';

export default function tellUs() {
  return (
    <div className='tell-us'>
      <div className='container'>
        <div className='row center'>
          <div
            className={'col-xs-12 col-sm-10 col-md-9'}
            style={{ textAlign: 'left' }}
          >
            <h2>You Have Custom Thoughts On How We Can Help?</h2>
            <p>Begin The Conversation Here...</p>
          </div>
          <div className={'col-xs-12 col-sm-2 col-md-3 '}>
            <button className='tell-us-button'>Tell Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
