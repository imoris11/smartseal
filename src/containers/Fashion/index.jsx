import React from 'react';
import better from '../../static/icon/efficiency.png';
import restore from '../../static/icon/restore.png';
import support from '../../static/icon/support.png';
import product from '../../static/img/capsules.png';
import medicine from '../../static/img/medicine.png';
import spin from '../../static/img/engineering.png';
import TellUs from '../../reuseables/tell-us';

function Fashion() {
  return (
    <div>
      <div className='fashion-header'>
        <div className='container'>
          <div className='row center' style={{ paddingTop: '40vh' }}>
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
        <div className='row center' style={{ paddingTop: '10vh' }}>
          <div className='row'>
            <div className='col-sm-6 retail-service'>
              <img src={better} className='better' alt='better' />
              <h2>Better Serve Your Customers</h2>
              <p>
                Giving your product buyers a way to prove <br /> ownership
                allows for higher quality post sale <br /> assistance. As an
                example, your customers can <br /> report their verified
                purchased products as lost <br />
                or stolen
              </p>
            </div>
            <div className='col-sm-6 retail-service'>
              <img src={restore} className='restore' alt='restore' />
              <h2>Restore Brand Identity</h2>
              <p>
                A highly encrypted and embedded label <br /> protects your
                brand’s promise. Customers build <br /> more trust as they learn
                about each step of your <br /> product development or engage
                more purchase <br />
                variety.
              </p>
            </div>
          </div>
          <div
            className='row'
            style={{ paddingTop: '15vh', paddingBottom: '10vh' }}
          >
            <div className='col-sm-6 retail-service'>
              <img src={product} className='product' alt='product' />
              <h2>Product Interaction</h2>
              <p>
                Our technology provides your brand with an easy <br /> way to
                interface with social media platforms to <br />
                further build a community and facilitate <br /> customer
                reviews. Create a continuous brand <br />
                story to directly highlight new features, <br /> customized
                promotions and cross-selling <br /> opportunities.
              </p>
            </div>
            <div className='col-sm-6 retail-service'>
              <img src={support} className='support' alt='support' />
              <h2>Support Sustainability</h2>
              <p>
                Your brand can better enable initiatives that <br /> increases
                awareness and recyclability
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#F6F6EF' }}>
        <h2 style={{ textAlign: 'center', padding: '7%' }}>Related Markets </h2>
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
                src={medicine}
                className='medicine'
                alt='medicine'
                style={{ marginBottom: '20px' }}
              />
              <p className='feature-bold-text'>Retail/Luxury</p>
              <p className='feature-small-text'>
                Unique Consumer Experiences <br /> Means Better Brand Outlook.
              </p>
            </div>
            <div className='col-sm-6'>
              <img
                src={spin}
                className='spin'
                alt='spin'
                style={{ marginBottom: '20px' }}
              />
              <p className='feature-bold-text'>Engineering</p>
              <p className='feature-small-text'>
                From easier access to technical information <br />
                to better production lead-time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TellUs />
    </div>
  );
}

export default Fashion;
