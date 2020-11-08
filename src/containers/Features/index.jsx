import React from 'react';
import brand from '../../static/imgs/the-brand.jpg';
import data from '../../static/imgs/dashboard.png';
import safety from '../../static/imgs/safety.png';
import tag from '../../static/img/tag.svg';
import api from '../../static/imgs/api.png';
import boot from '../../static/imgs/retail.png';
import medicine from '../../static/imgs/medicine.png';
import engineering from '../../static/imgs/blade.png';
import TellUs from '../../components/tell-us/tell-us';
import './features.css';
function Features() {
  return (
    <div>
      <div className='features-header'>
        <div className='container'>
          <div className='row ' style={{ paddingTop: '30vh' }}>
            <div className='col fashion-text text-white'>
              <h2>Brand visibility.</h2>
              <h2>Product Awareness & Authentication.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div style={{ backgroundColor: 'F6F6EF' }}>
          <h2 style={{ textAlign: 'center', padding: '7%' }}>
            Featured Stories
          </h2>
          <div className='row pre-feature'>
            <div className='col-sm-4 feature-story'>
              <img src={brand} className='brand img-resize' alt='brand' />
              <p className='feature-bold-text'>Digital Product Identity</p>
              <p className='feature-small-text'>
                Your customers can further trust and own a relationship with
                your brand by easily verifying that your product isn’t forged.
              </p>
            </div>
            <div className='col-sm-4 feature-story'>
              <img src={data} className='data img-resize' alt='data' />
              <p className='feature-bold-text'>Data Visualization</p>
              <p className='feature-small-text'>
                Through your customers’ app-less and anonymized interactions
                with your product, our dashboard shows heat-map based locations,
                product scan frequency, product tamper status and many more
                relevant user agent data you can filter.
              </p>
            </div>
            <div className='col-sm-4 feature-story'>
              <img src={safety} className='safety ' alt='safety' />
              <p className='feature-bold-text'>Guaranteed Product Security</p>
              <p className='feature-small-text'>
                Each tag is encoded in a Smart Seal Facility. We do not involve
                3rd Parties.
              </p>
            </div>
          </div>

          <div className='row  pre-feature flexer'>
            <div className='col-sm-4 feature-story'>
              <img src={tag} className='tag ' alt='tag' />
              <p className='feature-bold-text'>
                Drop-in Scripts For Your <br />
                Web Page
              </p>
              <p className='feature-small-text'>
                Enable tag access to the brand content your customer’s care
                about through a product’s entire lifecycle.
              </p>
            </div>
            <div className='col-sm-4 feature-story'>
              <img src={api} className='api ' alt='api' />
              <p className='feature-bold-text'>
                Full Featured API For Easy <br /> Integration To Our Database
              </p>
              <p className='feature-small-text'>
                Transform and protect pharma packaging through the digital
                identification of verified pharmaceutical products, while
                providing a distinct experience to consumers based on their
                medical experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div style={{ backgroundColor: 'F6F6EF' }}>
          <h2 style={{ textAlign: 'center', padding: '7%' }}>
            We Build Solutions for...
          </h2>
          <div className='row pre-feature'>
            <div className='col-sm-4'>
              <img
                src={boot}
                className='boot '
                alt='boot'
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <span className='feature-bold-text'>Retail/Luxury</span>
              <p className='feature-small-text'>
                Unique Consumer Experiences Means Better Brand Outlook.
              </p>
            </div>
            <div className='col-sm-4'>
              <img
                src={medicine}
                className='medicine '
                alt='medicine'
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <p className='feature-bold-text'>Pharmaceutical</p>
              <p className='feature-small-text'>
                Verifiable Products Means Better Consumer Safety.
              </p>
            </div>
            <div className='col-sm-4'>
              <img
                src={engineering}
                className='engineering '
                alt='engineering'
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <span className='feature-bold-text'>Engineering</span>
              <p className='feature-small-text'>
                From easier access to technical information to better production
                lead-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TellUs />
    </div>
  );
}

export default Features;
