import React from 'react';
import authentic from '../../static/img/authentic.png';
import parts from '../../static/img/parts.png';
import capsules from '../../static/img/capsules.png';

export default function Stories() {
  return (
    <div className='stories'>
      <div className='contianer'>
        <h1 className='text-center'>Feature Stories</h1>
        <div className='row'>
          <div className='col-md-4'>
            <div>
              <img src={authentic} alt={''} />
            </div>
            <div>
              <p>Importance Of Product Authentication</p>
              <span>By: SmartSeal . October 9 2020</span>
            </div>
          </div>
          <div className='col-md-4'>
            <div>
              <img src={parts} alt={''} />
            </div>
            <div>
              <p>Importance Of Product Authentication</p>
              <span>By: SmartSeal . October 9 2020</span>
            </div>
          </div>
          <div className='col-md-4'>
            <div>
              <img src={capsules} alt={''} />
            </div>
            <div>
              <p>Importance Of Product Authentication</p>
              <span>By: SmartSeal . October 9 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
