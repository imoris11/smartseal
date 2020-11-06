import React from 'react';
import better from '../../static/icon/efficiency.png';
import restore from '../../static/icon/restore.png';
import support from '../../static/icon/support.png';
import product from '../../static/icon/recycle.png';
import medicine from '../../static/img/medicine.svg';
import spin from '../../static/img/engineering.svg';
import TellUs from '../../components/tell-us/tell-us';
import { Link } from 'react-router-dom';

function Fashion() {
  return (
    <div>
      <div className='fashion-header'>
        <div className='container'>
          <div className='row '>
            <div className='col fashion-text text-white'>
              <h1>Retail/Luxury</h1>
              <p>
                Unique Consumer Experiences <br />
                Means Better Brand Outlook.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=' container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={better}
              className='better'
              alt='better'
              style={{ marginLeft: '40%' }}
            />
            <h2 style={{ textAlign: 'center' }}>Better Serve Your Customers</h2>
            <p style={{ textAlign: 'center' }}>
              Giving your product buyers a way to prove <br /> ownership allows
              for higher quality post sale <br /> assistance. As an example,
              your customers can <br /> report their verified purchased products
              as lost <br />
              or stolen
            </p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={restore}
              className='restore'
              alt='restore'
              style={{ marginLeft: '40%' }}
            />
            <h2 style={{ textAlign: 'center' }}>Restore Brand Identity</h2>
            <p style={{ textAlign: 'center' }}>
              A highly encrypted and embedded label <br /> protects your brand’s
              promise. Customers build <br /> more trust as they learn about
              each step of your <br /> product development or engage more
              purchase <br />
              variety.
            </p>
          </div>
        </div>
        <div className='row' style={{ paddingBottom: '10vh' }}>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={product}
              className='product'
              alt='product'
              style={{ marginLeft: '40%' }}
            />
            <h2 style={{ textAlign: 'center' }}>Product Interaction</h2>
            <p style={{ textAlign: 'center' }}>
              Our technology provides your brand with an easy <br /> way to
              interface with social media platforms to <br />
              further build a community and facilitate <br /> customer reviews.
              Create a continuous brand <br />
              story to directly highlight new features, <br /> customized
              promotions and cross-selling <br /> opportunities.
            </p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={support}
              className='support'
              alt='support'
              style={{ marginLeft: '40%' }}
            />
            <h2 style={{ textAlign: 'center' }}>Support Sustainability</h2>
            <p style={{ textAlign: 'center' }}>
              Your brand can better enable initiatives that <br /> increases
              awareness and recyclability
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F6F6EF' }}>
        <h2 style={{ textAlign: 'center', padding: '7%' }}>Related Markets </h2>
        <div className='container'>
          <div className='row pre-feature'>
            <Link to='/pharmaceutical' className='col-sm-6'>
              <img
                src={medicine}
                className='medicine'
                alt='medicine'
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <p className='feature-bold-text'>Pharmaceutical</p>
              <p className='feature-small-text'>
                Verifiable Products Means
                <br /> Better Consumer Safety.
              </p>
            </Link>
            <Link to='/engineering' className='col-sm-6'>
              <img
                src={spin}
                className='spin'
                alt='spin'
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <p className='feature-bold-text'>Engineering</p>
              <p className='feature-small-text'>
                From easier access to technical information <br />
                to better production lead-time.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <TellUs />
    </div>
  );
}

export default Fashion;
