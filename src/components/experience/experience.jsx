import React from 'react';
import watch from '../../static/imgs/brand-watch.png';
import melatonin from '../../static/imgs/brand-melatonin.png';
import './experience.css';

export default function Experience() {
  return (
    <div className={'experience '}>
      <div className='container'>
        <div className='row center'>
          <div className='col-xs-12 col-sm-6 col-md-6  experience-text'>
            <h1>Interactive Brand Experience</h1>
            <ul className='dashed'>
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

          <div className=' col-xs-12 col-sm-6 col-md-6 experience-img'>
            <img src={melatonin} alt='' />
            <img src={watch} alt='' className='floating-img' />
          </div>
        </div>
      </div>
    </div>
  );
}
