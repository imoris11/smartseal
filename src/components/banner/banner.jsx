import React from "react";
import brand from "../../static/img/mobile-brand-oil.png";
import "./banner.css";

export default function Banner() {
  return (
    <div className={"banner "}>
      <div className="container " style={{ marginRight: "18%" }}>
        <div className="row" style={{ paddingTop: "24vh" }}>
          <div
            className="col-xs-12 col-sm-6 col-md-6 banner-text"
            style={{ paddingTop: "17vh" }}
          >
            <h1>Secure Identification</h1>
            <h1>For Physical Products</h1>
            <p>Tap Phone On Product To Authenticate</p>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 banner-img">
            <img src={brand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
