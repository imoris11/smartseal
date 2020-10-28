import seal from "../Assets/images/Accent_Smart Seal_Guilloche_White 1.png";
import facebook from "../Assets/images/facebook.png";
import linkedin from "../Assets/images/linkedin.png";
import twitter from "../Assets/images/twitter-social-logotype 1.png";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-sm-4">
          <img src={seal} className="seal" alt="seal" />
        </div>
        <div className="col-sm-6 footer-text">
          <div className="row">
            <div className="col-sm-4">
              <b>Market</b>
              <p className="footer-text-tag">Fashion</p>
              <p className="footer-text-tag">Engineering</p>
              <p className="footer-text-tag">Pharmacetical</p>
            </div>
            <div className="col-sm-4">
              <b>Information</b>
              <p className="footer-text-tag">About us</p>
              <p className="footer-text-tag">Contact Us</p>
              <p className="footer-text-tag">Blog</p>
            </div>
            <div className="col-sm-4">
              <b>Policy</b>
              <p className="footer-text-tag">Privacy Policy</p>
              <p className="footer-text-tag">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8"></div>
        <div className="col-sm-4 footer-icons">
          <div>
            <img src={facebook} alt="facebook" /> &nbsp;
            <img src={linkedin} alt="linkedin" /> &nbsp;
            <img src={twitter} alt="twitter" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
