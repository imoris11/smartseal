import React, { useState } from 'react';
import hands from '../../static/icon/hands.png';
import engage from '../../static/icon/user-engagement.png';
import promote from '../../static/icon/promote.png';

function Contact() {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    title: '',
    cname: '',
    cwebsite: '',
    message: '',
    industry: '',
    quantity: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
    console.log(state);
  };

  const {
    firstname,
    lastname,
    email,
    title,
    cname,
    cwebsite,
    message,
    quantity,
    industry,
  } = state;
  const body = `Hello,
                %0D%0A
                %0D%0A
                ${message}
                %0D%0A
                %0D%0A
                Industry: ${industry}
                %0D%0A
                Quantity Needed: ${quantity}
                %0D%0A
                %0D%0A
                Regards,%0D%0A
                ${firstname} ${lastname}%0D%0A
                ${email} | ${title}%0D%0A
                ${cname} | ${cwebsite}%0D%0A
               `;
  const recieve = 'hello@igmrrf.com';
  const subject = 'Contact';

  return (
    <div>
      <div className='contact-header'>
        <div className='blocker-contact'>
          <div className='container'>
            <div className='row center' style={{ paddingTop: '30vh' }}>
              <div className='col fashion-text text-white'>
                <h1 className='text-center'>Let Us Begin!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container rectangles '>
        <div className='row center'>
          <div className='col-xs-12 col-sm-10 col-md-11'>
            <div className='row rectangle-box-holder'>
              <div className='col-xs-10 col-sm-3 col-md-3 rectangle-box'>
                <img src={hands} className='hands' alt='hands' />
                <p>
                  The future is built on brand <br />
                  trust and transparency
                </p>
              </div>
              <div className='col-xs-10 col-sm-3 col-md-3 rectangle-box'>
                <img src={engage} className='engage' alt='engage' />
                <p>
                  Engage your customers with <br /> your brand’s promise
                </p>
              </div>
              <div className='col-xs-10 col-sm-3 col-md-3 rectangle-box'>
                <img src={promote} className='promote' alt='promote' />
                <p>
                  Build creative marketing campaigns <br /> through this direct
                  sales channel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row center'>
        <div className='col-xs-12 col-sm-6 '>
          <div className='row '>
            <form className='contact-form'>
              <div className='col-sm-10 col-md-6'>
                <input
                  type='text'
                  onChange={handleChange}
                  id='fname'
                  name='firstname'
                  placeholder='First Name'
                  value={firstname}
                />
              </div>
              <div className='col-sm-10 col-md-6'>
                <input
                  onChange={handleChange}
                  type='text'
                  id='lname'
                  name='lastname'
                  placeholder='Last Name'
                  value={lastname}
                />
              </div>
              <div className='col-sm-10 col-md-6'>
                <input
                  onChange={handleChange}
                  type='text'
                  id='title'
                  name='email'
                  placeholder='Work Email'
                  value={email}
                />
              </div>
              <div className='col-sm-10 col-md-6'>
                <input
                  onChange={handleChange}
                  type='text'
                  id='title'
                  name='title'
                  placeholder='Job Title'
                  value={title}
                />
              </div>
              <div className='col-sm-10 col-md-6'>
                <input
                  onChange={handleChange}
                  type='text'
                  id='cname'
                  name='cname'
                  placeholder='Company Name'
                  value={cname}
                />
              </div>
              <div className='col-sm-10 col-md-6'>
                <input
                  onChange={handleChange}
                  type='text'
                  id='cwebsite'
                  name='cwebsite'
                  placeholder='Company Website'
                  value={cwebsite}
                />
              </div>
              <div className='col-sm-10 col-md-6'>
                <select id='industry' name='industry' onChange={handleChange}>
                  <option value={null}>Industry</option>
                  <option value='Internet Of Things'>Internet Of Things</option>
                  <option value='Banking'>Banking</option>
                  <option value='Medicine'>Medicine</option>
                </select>
              </div>
              <div className='col-sm-10 col-md-6'>
                <select id='quantity' name='quantity' onChange={handleChange}>
                  <option value={null}>Product Quantity</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </div>
              <div className='col-sm-12'>
                <textarea
                  onChange={handleChange}
                  id='message'
                  name='message'
                  placeholder='Additional Message '
                  style={{ height: '200px' }}
                  value={message}
                ></textarea>
              </div>

              <a
                href={`mailto:${recieve}?cc=${recieve}, ${recieve}, &bcc=${recieve}&subject=${subject}&body=${body}`}
                className='contact-link'
              >
                Contact Us
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
