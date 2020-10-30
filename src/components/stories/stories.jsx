import React from 'react';
import authentic from '../../static/img/authentic.png';
import parts from '../../static/img/parts.png';
import capsules from '../../static/img/capsules.png';
import './stories.css';

export default function Stories() {
  return (
    <div className='stories'>
      <div className='contianer'>
        <h1 className='text-center'>Feature Stories</h1>
        <div className='row center'>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <div className='stories-img'>
              <img src={authentic} alt={''} />
            </div>
            <div>
              <h2>Importance Of Product Authentication</h2>
              <p>By: SmartSeal . October 9 2020</p>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <div className='stories-img'>
              <img src={parts} alt={''} />
            </div>
            <div>
              <h2>Importance Of Product Authentication</h2>
              <p>By: SmartSeal . October 9 2020</p>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <div className='stories-img'>
              <img src={capsules} alt={''} />
            </div>
            <div>
              <h2>Importance Of Product Authentication</h2>
              <p>By: SmartSeal . October 9 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
