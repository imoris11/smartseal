import React, { useEffect } from 'react';
import better from '../../static/icon/efficiency.png';
import restore from '../../static/icon/restore.png';
import support from '../../static/icon/support.png';
import product from '../../static/icon/recycle.png';
import medicine from '../../static/imgs/medicine.png';
import spin from '../../static/imgs/blade.png';
import TellUs from '../../components/tell-us/tell-us';
import { Link } from 'react-router-dom';
import './fashion.css';

function Fashion() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className='fashion'>
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
            <img src={better} className='better' alt='better' />
            <h2 style={{ textAlign: 'center' }}>Better Serve Your Customers</h2>
            <p className='display-desktop'>
              Giving your product buyers a way to prove <br /> ownership allows
              for higher quality post sale <br /> assistance. As an example,
              your customers can <br /> report their verified purchased products
              as lost <br />
              or stolen
            </p>
            <p className='display-mobile'>
              Giving your product buyers a way to prove ownership allows for
              higher quality post sale assistance. As an example, your customers
              can report their verified purchased products as lost or stolen
            </p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img src={restore} className='restore' alt='restore' />
            <h2 style={{ textAlign: 'center' }}>Restore Brand Identity</h2>
            <p className='display-desktop'>
              A highly encrypted and embedded label <br /> protects your brand’s
              promise. Customers build <br /> more trust as they learn about
              each step of your <br /> product development or engage more
              purchase <br />
              variety.
            </p>
            <p className='display-mobile'>
              A highly encrypted and embedded label protects your brand’s
              promise. Customers build more trust as they learn about each step
              of your product development or engage more purchase variety.
            </p>
          </div>
        </div>
        <div className='row' style={{ paddingBottom: '10vh' }}>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img src={product} className='product' alt='product' />
            <h2 style={{ textAlign: 'center' }}>Product Interaction</h2>
            <p className='display-desktop'>
              Our technology provides your brand with an easy <br /> way to
              interface with social media platforms to <br />
              further build a community and facilitate <br /> customer reviews.
              Create a continuous brand <br />
              story to directly highlight new features, <br /> customized
              promotions and cross-selling <br /> opportunities.
            </p>
            <p className='display-mobile'>
              Our technology provides your brand with an easy way to interface
              with social media platforms to further build a community and
              facilitate customer reviews. Create a continuous brand story to
              directly highlight new features, customized promotions and
              cross-selling opportunities.
            </p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img src={support} className='support' alt='support' />
            <h2>Support Sustainability</h2>
            <p className='display-desktop'>
              Your brand can better enable initiatives that <br /> increases
              awareness and recyclability
            </p>
            <p className='display-mobile'>
              Your brand can better enable initiatives that increases awareness
              and recyclability
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F6F6EF' }}>
        <h2 style={{ textAlign: 'center', padding: '7%' }}>Related Markets </h2>
        <div className='container'>
          <div className='row pre-feature'>
            <Link to='/pharmaceutical' className='col-xs-12 col-sm-6'>
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
            <Link to='/engineering' className='col-xs-12 col-sm-6'>
              <img
                src={spin}
                className='spin'
                alt='spin'
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <p className='feature-bold-text'>Engineering</p>
              <p className='feature-small-text display-desktop'>
                From easier access to technical information <br />
                to better production lead-time.
              </p>
              <p className='feature-small-text display-mobile'>
                From easier access to technical information to better production
                lead-time.
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
