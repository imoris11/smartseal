import seal from '../../Assets/images/Accent_Smart Seal_Guilloche_White 1.png';
import facebook from '../../Assets/images/facebook.png';
import linkedin from '../../Assets/images/linkedin.png';
import twitter from '../../Assets/images/twitter-social-logotype 1.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <img src={seal} className='seal' alt='seal' />
          </div>
          <div className='col-sm-6 footer-text'>
            <div className='row'>
              <div className='col-sm-4'>
                <b>Market</b>
                <p className='footer-text-tag'>
                  <Link to='/fashion'>Fashion</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/engineering'>Engineering</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/pharmaceutical'>Pharmacetical</Link>
                </p>
              </div>
              <div className='col-sm-4'>
                <b>Information</b>
                <p className='footer-text-tag'>
                  <Link to='/about'>About us</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/contact'>Contact Us</Link>
                </p>
                <p className='footer-text-tag'>
                  <Link to='/blog'>Blog</Link>
                </p>
              </div>
              <div className='col-sm-4'>
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
          <div className='col-sm-8'></div>
          <div className='col-sm-4 footer-icons'>
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
