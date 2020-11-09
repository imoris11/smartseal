import React from 'react';
import { Link } from 'react-router-dom';
import './tell-us.css';

export default function tellUs() {
  return (
    <div className='tell-us'>
      <div className='container'>
        <div className='row center'>
          <div className={'col-xs-12 col-sm-10 col-md-9 tell-us-text'}>
            <h2>You Have Custom Thoughts On How We Can Help?</h2>
            <p>Begin The Conversation Here...</p>
          </div>
          <div className={'col-xs-12 col-sm-2 col-md-3 '}>
            <Link to='/contact'>
              <button className='tell-us-button'>Tell Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
