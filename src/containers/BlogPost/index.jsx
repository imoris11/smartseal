import React from 'react';
import pills from '../../static/img/pills.png';
import TellUs from '../../reuseables/tell-us';
import Latest from '../../reuseables/latest-story';
import facebook from '../../static/icon/facebook.png';
import linkedin from '../../static/icon/linkedin.png';
import twitter from '../../static/icon/twitter.png';

function Features() {
  return (
    <div>
      <div className='blog-post-header'>
        <div className='container'>
          <div className='row ' style={{ paddingTop: '20vh' }}>
            <div>
              <div style={{ paddingTop: '8vh', marginLeft: '2%' }}>
                <div className='col fashion-text text-white'>
                  <h1 style={{ fontSize: '48px', fontWeight: '500' }}>
                    Medicine and Up to date <br /> values in authenticity.
                  </h1>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <p style={{ fontSize: '16px', color: '#FFFAD0' }}>
                        By: SmartSeal . October 9 2020
                      </p>
                    </div>
                    <div className='col-sm-6 '>
                      <div className='row'>
                        <div className='col-sm-5'></div>
                        <div className='col-sm-3'>
                          <p style={{ fontSize: '16px', color: '#FFFAD0' }}>
                            Share
                          </p>
                          <div>
                            <img src={facebook} alt='facebook' /> &nbsp;
                            <img src={linkedin} alt='linkedin' /> &nbsp;
                            <img src={twitter} alt='twitter' />{' '}
                          </div>
                        </div>
                        <div className='col-sm-4'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div
          className='row rectangles-image '
          style={{ backgroundColor: 'red' }}
        >
          <img src={pills} className='blog-pills' alt='pills' />
        </div>
      </div>
      <div className='container'>
        <br />
        <br />
        <h2>Medicine and Up to date values in authenticity.</h2>
        <br /> <br />
        <p style={{ fontSize: '16px', fontWeight: '400' }}>
          {' '}
          But I must explain to You how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give.. You a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"But I must explain to you how all this mistaken
          idea of denouncing pleasure and praising pain was born and I will give{' '}
        </p>
        <br />
        <h2>
          Medicine and Up to date values in authenticity.- Mental Health and
          Psychiatric Nursing
        </h2>
        <br />
        <br />
        <p
          style={{ fontSize: '16px', fontWeight: '400', paddingBottom: '10%' }}
        >
          You a complete account of the system, and expound the actual teachings
          of the great explorer of the truth, the master-builder of human
          happiness. No one rejects, dislikes, or avoids pleasure itself,
          because it is pleasure, but because those who do not know how to
          pursue pleasure rationally encounter consequences that are extremely
          painful. Nor again is there anyone who loves or pursues or desires to
          obtain pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure. To take a trivial example, which of us ever undertakes
          laborious physical exercise, except to obtain some advantage from it?
          But who has any right to find fault with a man who chooses to enjoy a
          pleasure that has no annoying consequences, or one who avoids a pain
          that produces no resultant pleasure?"But I must explain to you how all
          this mistaken idea of denouncing pleasure and praising pain was born
          and I will give you a complete account of the system, and expound the
          actual teachings of the great explorer of the truth, the
          master-builder of human happiness. No one rejects, dislikes, or avoids
          pleasure itself, because it is pleasure, but because those who do not
          know how to pursue pleasure rationally encounter consequences that are
          extremely painful. Nor again is there anyone who loves or pursues or
          desires to obtain pain of itself, because it is pain, but because
          occasionally circumstances occur in which toil and pain can procure
          him some great pleasure. To take a trivial example, which of us ever
          undertakes laborious physical exercise, except to obtain some
          advantage from it? But who has any right to find fault with a man who
          chooses to enjoy a pleasure that has no annoying consequences, or one
          who avoids a pain that produces no resultant pleasure?"
        </p>
      </div>

      <div className='container-fluid' style={{ backgroundColor: '#FFFCE3' }}>
        <h2 style={{ textAlign: 'center', padding: '5%' }}>Related Posts</h2>
        <Latest />
      </div>

      <TellUs />
    </div>
  );
}

export default Features;
