import seal from '../../static/img/logo-icon.svg';
import facebook from '../../static/icon/facebook.png';
import linkedin from '../../static/icon/linkedin.png';
import twitter from '../../static/icon/twitter.png';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row center'>
          <div className='d-sm-none col-md-3 footer-img d-sm-none'>
            <img src={seal} className='seal' alt='seal' />
          </div>
          <div className='col-md-9 footer-text'>
            <div className='row'>
              <div className='col-xs-6 col-sm-4 col-md-4 footer-text-single'>
                <b>Market</b>
                <p className='footer-text-tag'>
                  <Link to='/fashion'>Retail/Luxury</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/engineering'>Engineering</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/pharmaceutical'>Pharmaceutical</Link>
                </p>
              </div>
              <div className='col-xs-6 col-sm-4 col-md-4 footer-text-single'>
                <b>Information</b>
                <p className='footer-text-tag'>
                  <Link to='/about'>About Us</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/contact'>Contact Us</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/blog'>Blog</Link>
                </p>
              </div>
              <div className='col-xs-8 col-sm-4 col-md-4 footer-text-single'>
                <b>Policy</b>
                <p className='footer-text-tag'>
                  <Link to='/privacypolicy'>Privacy Policy</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/termsandconditions'>Terms & Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 footer-icons'>
            <div>
              <img src={facebook} alt='facebook' /> &nbsp;
              <img src={linkedin} alt='linkedin' /> &nbsp;
              <img src={twitter} alt='twitter' />{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
