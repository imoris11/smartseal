import React from 'react';
import support from '../../static/icon/circle-dot.png';
import engage from '../../static/icon/user-engagement.png';
import promote from '../../static/icon/promote.png';

function Contact() {
  return (
    <div>
      <div className='contact-header'>
        <div className='container'>
          <div className='row center' style={{ paddingTop: '30vh' }}>
            <div className='col fashion-text text-white'>
              <h1 className='text-center'>Let Us Begin!</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container center'>
        <div className='row rectangles'>
          <div className='row center'>
            <div className='col-sm-4 rectangle-box-left'>
              <img src={support} className='support' alt='support' />
              <p>
                The future is built on brand <br />
                trust and transparency
              </p>
            </div>
            <div className='col-sm-4 rectangle-box-right'>
              <img src={engage} className='engage' alt='engage' />
              <p>
                Engage your customers with <br /> your brand’s promise
              </p>
            </div>
            <div className='col-sm-4 rectangle-box-left'>
              <img src={promote} className='promote' alt='promote' />
              <p>
                Build creative marketing campaigns <br /> through this direct
                sales channel
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row' style={{ paddingBottom: '10%', paddingTop: '3%' }}>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='row'>
            <form>
              <div className='col-sm-6'>
                <input
                  type='text'
                  id='fname'
                  name='firstname'
                  placeholder='First Name'
                />
              </div>
              <div className='col-sm-6'>
                <input
                  type='text'
                  id='lname'
                  name='lastname'
                  placeholder='Last Name'
                />
              </div>
            </form>
          </div>
          <div className='row' style={{ paddingTop: '5%' }}>
            <form>
              <div className='col-sm-6'>
                <input
                  type='text'
                  id='title'
                  name='email'
                  placeholder='Work Email'
                />
              </div>
              <div className='col-sm-6'>
                <input
                  type='text'
                  id='title'
                  name='title'
                  placeholder='Job Title'
                />
              </div>
            </form>
          </div>
          <div className='row' style={{ paddingTop: '5%' }}>
            <form>
              <div className='col-sm-6'>
                <input
                  type='text'
                  id='cname'
                  name='cname'
                  placeholder='Company Name'
                />
              </div>
              <div className='col-sm-6'>
                <input
                  type='text'
                  id='cwebsite'
                  name='cwebsite'
                  placeholder='Company Website'
                />
              </div>
            </form>
          </div>
          <div className='row' style={{ paddingTop: '5%' }}>
            <form>
              <div className='col-sm-6'>
                <select id='industry' name='industry'>
                  <option value='industry'>Industry</option>
                </select>
              </div>

              <div className='col-sm-6'>
                <select id='quantity' name='quantity'>
                  <option value='quantity'>Product Quantity</option>
                </select>
              </div>
            </form>
          </div>
          <div style={{ paddingTop: '5%' }}>
            <textarea
              id='message'
              name='message'
              placeholder='Additional Message '
              style={{ height: '200px' }}
            ></textarea>
          </div>
          <div class='row' style={{ paddingTop: '5%' }}>
            <input type='submit' value='Contact Us' />
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </div>
  );
}

export default Contact;
