import React from 'react';
import lifecycle from '../../static/icon/life-cycle.png';
import promote from '../../static/icon/promote.png';
import recycle from '../../static/icon/recycle.png';
import info from '../../static/icon/info.png';
import boot from '../../static/img/retail.svg';
import spin from '../../static/img/engineering.svg';
import TellUs from '../../components/tell-us/tell-us';
import { Link } from 'react-router-dom';

function Pharmaceutical() {
  return (
    <div>
      <div className='pharmaceutical-header'>
        <div className='container'>
          <div className='row'>
            <div className='col fashion-text text-white'>
              <h1>Pharmaceutical</h1>
              <p>
                Verifiable Products Means <br /> Better Consumer Safety.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=' container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service '>
            <img
              src={lifecycle}
              className='lifecycle '
              alt='lifecycle'
              style={{ marginLeft: '40%' }}
            />
            <h2>Lifecycle Service</h2>
            <p>
              Throughout a products’ existence, our tags serve <br /> as a data
              point for a customized journey that <br /> could lead to
              notifications on medication <br /> management with the end
              customer.
            </p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={promote}
              className='promote'
              alt='promote'
              style={{ marginLeft: '40%' }}
            />
            <h2>Promote Brand Trust</h2>
            <p>
              Reducing the chance that an end consumer can <br />
              take an illegally made product greatly reduces <br /> the money
              spent on defending malpractice <br /> lawsuits.
            </p>
          </div>
        </div>
        <div className='row' style={{ paddingBottom: '10vh' }}>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={recycle}
              className='recycle'
              alt='recycle'
              style={{ marginLeft: '40%' }}
            />
            <h2>Solve Recyclability</h2>
            <p>
              A direct interaction with your end customers <br /> greatly
              enables sustainability initiatives such as a <br /> viable refill
              program or other re-distribution <br /> campaigns.
            </p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 retail-service'>
            <img
              src={info}
              className='info'
              alt='info'
              style={{ marginLeft: '40%' }}
            />
            <h2>Granular Telehealth</h2>
            <p>
              The data your brand obtains gives more <br /> nuanced compliant
              information that ties <br /> to relevant medical history
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#F6F6EF' }}>
        <h2 style={{ textAlign: 'center', padding: '7%' }}>Related Markets</h2>
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

export default Pharmaceutical;
