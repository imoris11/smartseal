import React from 'react';
import industry from '../../static/icon/circle-dot.png';
import support from '../../static/icon/support.png';
import tap from '../../static/icon/on-tap.png';
import trace from '../../static/icon/trace.png';
import medicine from '../../static/img/medicine.svg';
import boot from '../../static/img/retail.svg';
import TellUs from '../../components/tell-us/tell-us';
import { Link } from 'react-router-dom';

function Engineering() {
  return (
    <div>
      <div className='engineering-header'>
        <div className='container'>
          <div className='row'>
            <div className='col fashion-text text-white'>
              <h1>Engineering</h1>
              <p>
                From easier access to technical information <br /> to better
                production lead-time
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=' container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={support}
              className='support'
              alt='support'
              style={{ marginLeft: '40%' }}
            />
            <h2>Support Your Value Chain</h2>
            <p>
              Smartseal has created an authentication layer <br /> that securely
              and easily gets important <br /> information to manufacturers and
              maintenance
              <br /> agents in the field.
            </p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={industry}
              className='industry'
              alt='industry'
              style={{ marginLeft: '40%' }}
            />
            <h2>Industry Trust. No F.O.D</h2>
            <p>
              Your products have a standard that has to be <br /> met. You now
              have a platform that to enable a <br />
              chain of custody protocol to communicate this
              <br /> to your end customers.
            </p>
          </div>
        </div>
        <div className='row' style={{ paddingBottom: '10vh' }}>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={tap}
              className='tap'
              alt='tap'
              style={{ marginLeft: '40%' }}
            />
            <h2>Information Is A Tap Away</h2>
            <p>
              We enable and can connect to your internal <br /> supply chain
              management consoles. This opens
              <br /> up a world where technical schematics, material <br />
              composition and regulatory details can be
              <br />
              securely shared directly from each end product.
            </p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={trace}
              className='trace'
              alt='trace'
              style={{ marginLeft: '40%' }}
            />
            <h2>Component Traceability</h2>
            <p>
              Your customers can trace origin points to prove <br /> no illegal
              production overruns or counterfeits.
              <br /> The durability data here strengthens your
              <br /> brand promise.
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#F6F6EF' }}>
        <h2 style={{ textAlign: 'center', padding: '7%' }}>Related Markets </h2>
        <div className='container'>
          <div className='row pre-feature'>
            <Link to='/fashion' className='col-sm-6'>
              <img
                src={boot}
                className='boot'
                alt='boot'
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <p className='feature-bold-text'>Retail/Luxury</p>
              <p className='feature-small-text'>
                Unique Consumer Experiences <br /> Means Better Brand Outlook.
              </p>
            </Link>
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
          </div>
        </div>
      </div>
      <TellUs />
    </div>
  );
}

export default Engineering;
