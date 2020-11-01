import React from 'react';
import pills from '../../static/img/pills.png';
import TellUs from '../../components/tell-us/tell-us';
import Latest from '../../reuseables/latest-story';
function Features() {
  return (
    <div>
      <div className='blog-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5 blog-pill-desktop'>
              <img src={pills} className='pills' alt='pills' />
            </div>
            <div className='col-xs-11 col-sm-7'>
              <div className='col fashion-text text-white'>
                <div className='feature-button'>
                  <p>Featured</p>
                </div>

                <h1>Medicine and Up to date values in authenticity.</h1>
                <p>By: SmartSeal . October 9 2020</p>
              </div>
            </div>
            <div className='col-xs-11 col-sm-5 blog-pill-mobile'>
              <img src={pills} className='pills' alt='pills' />
            </div>
          </div>
        </div>
      </div>
      <div className='blog-body'>
        <div className='container-fluid'>
          <div>
            <h2>Latest Stories</h2>
            <Latest />
            <Latest />
          </div>
        </div>
        <div className='container-fluid'>
          <div>
            <h2>Recommended For You</h2>
            <Latest />
          </div>
        </div>
      </div>

      <TellUs />
    </div>
  );
}

export default Features;
