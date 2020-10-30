import React from 'react';
import brand from '../../static/img/the-brand.png';
import data from '../../static/img/dashboard.png';
import safety from '../../static/icon/safety.png';
import tag from '../../static/img/tag.png';
import api from '../../static/img/api.png';
import boot from '../../static/img/retail.png';
import medicine from '../../static/img/medicine.png';
import engineering from '../../static/img/engineering.png';
import TellUs from '../../reuseables/tell-us';
function Features() {
  return (
    <div>
      <div className='features-header'>
        <div className='container'>
          <div className='row center' style={{ paddingTop: '30vh' }}>
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
          <div
            className='row'
            style={{
              paddingLeft: '7%',
              paddingRight: '7%',
              paddingBottom: '7%',
            }}
          >
            <div className='col-sm-4'>
              <img
                src={brand}
                className='brand'
                alt='brand'
                style={{ marginBottom: '20px' }}
              />
              <span className='feature-bold-text'>
                Digital Product Identity
              </span>
              <p className='feature-small-text'>
                Your customers can further trust and own a <br />
                relationship with your brand by easily verifying
                <br /> that your product isn’t forged.
              </p>
            </div>
            <div className='col-sm-4'>
              <img
                src={data}
                className='data'
                alt='data'
                style={{ marginBottom: '20px' }}
              />
              <p className='feature-bold-text'>Data Visualization</p>
              <p className='feature-small-text'>
                Through your customers’ app-less and <br />
                anonymized interactions with your product,
                <br /> our dashboard shows heat-map based locations, product
                scan frequency, product <br />
                tamper status and many more relevant user <br /> agent data you
                can filter.
              </p>
            </div>
            <div className='col-sm-4'>
              <img
                src={safety}
                className='safety'
                alt='safety'
                style={{ marginBottom: '20px' }}
              />
              <p className='feature-bold-text'>Guaranteed Product Security</p>
              <p className='feature-small-text'>
                Each tag is encoded in a Smart Seal Facility. We <br /> do not
                involve 3rd Parties.
              </p>
            </div>
          </div>

          <div className='container'>
            <div
              className='row'
              style={{
                paddingLeft: '7%',
                paddingRight: '7%',
                paddingBottom: '7%',
              }}
            >
              <div className='col-sm-6'>
                <img
                  src={tag}
                  className='tag'
                  alt='tag'
                  style={{ marginBottom: '20px' }}
                />
                <p className='feature-bold-text'>
                  Drop-in Scripts For Your <br />
                  Web Page
                </p>
                <p className='feature-small-text'>
                  Enable tag access to the brand content your <br /> customer’s
                  care about through a product’s entire <br /> lifecycle.
                </p>
              </div>
              <div className='col-sm-6'>
                <img
                  src={api}
                  className='api'
                  alt='api'
                  style={{ marginBottom: '20px' }}
                />
                <p className='feature-bold-text'>
                  Full Featured API For Easy <br /> Integration To Our Database
                </p>
                <p className='feature-small-text'>
                  Transform and protect pharma packaging <br /> through the
                  digital identification of verified <br /> pharmaceutical
                  products, while providing a <br /> distinct experience to
                  consumers based on their <br />
                  medical experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div style={{ backgroundColor: 'F6F6EF' }}>
          <h2 style={{ textAlign: 'center', padding: '5%' }}>
            We Build Solutions for...
          </h2>
          <div
            className='row'
            style={{
              paddingLeft: '7%',
              paddingRight: '7%',
              paddingBottom: '7%',
            }}
          >
            <div className='col-sm-4'>
              <img
                src={boot}
                className='boot'
                alt='boot'
                style={{ marginBottom: '20px' }}
              />
              <span className='feature-bold-text'>Retail/Luxury</span>
              <p className='feature-small-text'>
                Unique Consumer Experiences Means Better Brand Outlook.
              </p>
            </div>
            <div className='col-sm-4'>
              <img
                src={medicine}
                className='medicine'
                alt='medicine'
                style={{ marginBottom: '20px' }}
              />
              <p className='feature-bold-text'>Pharmaceutical</p>
              <p className='feature-small-text'>
                Verifiable Products Means Better Consumer Safety.
              </p>
            </div>
            <div className='col-sm-4'>
              <img
                src={engineering}
                className='engineering'
                alt='engineering'
                style={{ marginBottom: '20px' }}
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
