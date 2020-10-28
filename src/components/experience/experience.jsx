import React from 'react';
import watch from '../../static/img/brand-watch.png';
import melatonin from '../../static/img/brand-melatonin.png';
import './experience.css';

export default function Experience() {
  return (
    <div className={'experience '}>
      <div className='container'>
        <div className='row space-between' style={{ paddingTop: '25vh' }}>
          <div className='col-md-5 mxn2 experience-text text-black'>
            <ul>
              <li>
                Leverage our technology to design brand experiences that are
                unique to your products, and personalized for consumers
                depending on distinct buyer attributes and product features.
              </li>
              <li>
                {' '}
                Create a continuous brand story that encourages consumers to
                learn more about the production process, how to use a product,
                new and upcoming features, or hear curated stories.
              </li>
            </ul>
          </div>
          <div className='col-md-2'></div>

          <div
            className=' col-md-5 experience-img mx-auto'
            style={{ position: 'relative' }}
          >
            <img src={melatonin} alt='' />
            <img src={watch} alt='' className='floating-img' />
          </div>
        </div>
      </div>
    </div>
  );
}
