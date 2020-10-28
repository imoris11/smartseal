import logo from '../Assets/images/Logo_SmartSeal_Horizontal_White 1.png';
import { BrowserRouter as Link } from 'react-router-dom';

function Header() {
  return (
    <div className='container'>
      <div className='col-sm-3 margin-top'>
        <img src={logo} className='logo' alt='logo' />
      </div>
      <div className='col-sm-6'>
        <nav className='navbar navbar-inverse nav-style'>
          <div>
            <div className='navbar-header'></div>
            <ul className='nav navbar-nav '>
              <li>
                <Link to='#'>Home</Link>
              </li>
              <li>
                <Link to='#'>About</Link>
              </li>
              <li>
                <Link to='#'>Features</Link>
              </li>
              <li className='dropdown'>
                <Link className='dropdown-toggle' data-toggle='dropdown' to='#'>
                  Market <span className='caret'></span>
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link to='#'>Page 1-1</Link>
                  </li>
                  <li>
                    <Link to='#'>Page 1-2</Link>
                  </li>
                  <li>
                    <Link to='#'>Page 1-3</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to='#'>Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='col-sm-3 contact-margin-top '>
        <span className='contact-us'>Contact Us</span>
      </div>
      <br />
    </div>
  );
}

export default Header;
