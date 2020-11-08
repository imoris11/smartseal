import React from 'react';
import brand from '../../static/img/tag.svg';
import how_it_works from '../../static/imgs/how_it_works.gif';
import './how-it-works.css';

export default function HowItWorks() {
  return (
    <React.Fragment>
      <div className='gif'>
        <img alt='' src={how_it_works} width={'100%'} />
      </div>

      <div className='how-it-works'>
        <div className='container'>
          <div className={'row'}>
            <div className={'col-xs-12 col-sm-6 col-md-6  desktop'}>
              <img src={brand} alt='' />
            </div>
            <div className={'col-xs-12 col-sm-6 col-md-6 text'}>
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
                Consumers enjoy unique brand experiences, loyalty, and
                interactive signage infrastructure.
              </p>
            </div>

            <div
              className={'col-xs-12 col-sm-6 col-md-6 how-it-works-img mobile'}
            >
              <img src={brand} alt='' />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
