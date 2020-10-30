import React from 'react';
import simplicity from '../../static/icon/trace.png';
import security from '../../static/icon/secuurity.png';
import efficiency from '../../static/icon/efficiency.png';
import TellUs from '../../reuseables/tell-us';

function About() {
  return (
    <div className='about-background'>
      <div className='contact-header'>
        <div className='container'>
          <div className='row center' style={{ paddingTop: '17%' }}>
            <div>
              <h1 className='text-center'>
                Continuously create unique and fully secure <br /> relevant
                experiences based on brand need.
              </h1>
            </div>
            <div className='col fashion-text text-white'>
              <h1 className='text-center'>Core Values</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container '>
        <div className='row rectangles'>
          <div className='row center'>
            <div className='col-sm-4 rectangle-box-left'>
              <img src={simplicity} className='simplicity' alt='simplicity' />
              <h3>Simplicity</h3>
              <p>
                Our solution is turnkey, clear <br />
                and is easy to implement
              </p>
            </div>
            <div className='col-sm-4 rectangle-box-right'>
              <img src={security} className='security' alt='security' />
              <h3>Security</h3>
              <p>
                Our diligent process always results <br /> in your product’s
                authenticity.
              </p>
            </div>
            <div className='col-sm-4 rectangle-box-left'>
              <img src={efficiency} className='efficiency' alt='efficiency' />
              <h3>Efficiency</h3>
              <p>
                From each marketing campaign and <br /> through all business
                integrations we <br /> will be your capable partner.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container about-text'>
        <div className='row' style={{ paddingBottom: '10%', paddingTop: '3%' }}>
          <h1 className='about-text text-center' style={{ paddingTop: '5%' }}>
            About Us
          </h1>
          <p
            className='text-center'
            style={{
              fontSize: '18px',
              fontWeight: '500px',
              lineHeight: '28.3px',
            }}
          >
            <br />
            A few engineers, data analysts and marketers came together to
            imagine a world where all physical products can be <br /> seamlessly
            interactive through a secure channel. The smart solution became a
            clever combination of bank-grade <br /> encrypted radio frequency
            identification tags, intuitive mobile interactions without an app
            being necessary and <br /> real-time hyper-local behavioral data
            provided for brands.
            <br /> <br /> <br /> <br />
            We believe that by building a means of product access to everyone
            along your value chain, lays out an infrastructure <br />
            where you can continuously create unique and fully secure relevant
            experiences based on brand need.
          </p>
        </div>
      </div>
      <TellUs />
    </div>
  );
}

export default About;
