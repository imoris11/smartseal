import React from 'react';
import industry from '../../static/icon/circle-dot.png';
import support from '../../static/icon/support.png';
import tap from '../../static/icon/on-tap.png';
import trace from '../../static/icon/trace.png';
import medicine from '../../static/img/medicine.png';
import boot from '../../static/img/retail.png';
import TellUs from '../../reuseables/tell-us';

function Engineering() {
  return (
    <div>
      <div className='engineering-header'>
        <div className='container'>
          <div className='row center' style={{ paddingTop: '40vh' }}>
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
      <div className=" container">
        <div className="row center" style={{ paddingTop: "10vh" }}>
          <div className="row">
            <div className="col-sm-6 retail-service">
              <img
                src={support}
                className="support"
                alt="support"
                style={{ marginLeft: "40%" }}
              />
              <h2 style={{ textAlign: "center" }}>Support Your Value Chain</h2>
              <p style={{ textAlign: "center" }}>

                Smartseal has created an authentication layer <br /> that
                securely and easily gets important <br /> information to
                manufacturers and maintenance
                <br /> agents in the field.
              </p>
            </div>
            <div className="col-sm-6 retail-service">
              <img
                src={industry}
                className="industry"
                alt="industry"
                style={{ marginLeft: "40%" }}
              />
              <h2 style={{ textAlign: "center" }}>Industry Trust. No F.O.D</h2>
              <p style={{ textAlign: "center" }}>

                Your products have a standard that has to be <br /> met. You now
                have a platform that to enable a <br />
                chain of custody protocol to communicate this
                <br /> to your end customers.
              </p>
            </div>
          </div>
          <div
            className='row'
            style={{ paddingTop: '15vh', paddingBottom: '10vh' }}
          >
            <div className="col-sm-6 retail-service">
              <img
                src={tap}
                className="tap"
                alt="tap"
                style={{ marginLeft: "40%" }}
              />
              <h2 style={{ textAlign: "center" }}>Information Is A Tap Away</h2>
              <p style={{ textAlign: "center" }}>

                We enable and can connect to your internal <br /> supply chain
                management consoles. This opens
                <br /> up a world where technical schematics, material <br />
                composition and regulatory details can be
                <br />
                securely shared directly from each end product.
              </p>
            </div>
            <div className="col-sm-6 retail-service">
              <img
                src={trace}
                className="trace"
                alt="trace"
                style={{ marginLeft: "40%" }}
              />
              <h2 style={{ textAlign: "center" }}>Component Traceability</h2>
              <p style={{ textAlign: "center" }}>

                Your customers can trace origin points to prove <br /> no
                illegal production overruns or counterfeits.
                <br /> The durability data here strengthens your
                <br /> brand promise.
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
                src={boot}

                className="boot"
                alt="boot"
                style={{ marginBottom: "20px", width: "100%" }}

              />
              <p className='feature-bold-text'>Retail/Luxury</p>
              <p className='feature-small-text'>
                Unique Consumer Experiences <br /> Means Better Brand Outlook.
              </p>
            </div>
            <div className='col-sm-6'>
              <img
                src={medicine}

                className="medicine"
                alt="medicine"
                style={{ marginBottom: "20px", width: "100%" }}

              />
              <p className='feature-bold-text'>Pharmaceutical</p>
              <p className='feature-small-text'>
                Verifiable Products Means
                <br /> Better Consumer Safety.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TellUs />
    </div>
  );
}

export default Engineering;
