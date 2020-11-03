import React from "react";
import chain from "../../static/img/chain-of-study.png";
import registration from "../../static/img/product-registration.png";
import "./registration.css";

export default function Registration() {
  return (
    <div className="registration">
      <div className="container">
        <div className={"row center"}>
          <div className="col-sm-12 col-sm-6 col-md-6">
            <h1>
              Digital Registration
              <br /> & Chain of Custody
            </h1>
            <p style={{ paddingTop: "40px" }}>
              Product registration builds brand loyalty and is the basis <br />{" "}
              of a strong customer relationship. It is key to providing <br />{" "}
              enhanced post-sales service and support.
            </p>
            <p style={{ paddingTop: "40px" }}>
              Leverage this feature to share enhancements and new <br />
              {""}
              releases, validate warranties and service agreements, <br />{" "}
              cross-sell, and get feedback on the purchase process.
            </p>
          </div>

          <div className={"col-sm-12 col-sm-6 col-md-6 registration-img"}>
            <img src={registration} alt="" />
            <img src={chain} alt="" className="floating-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
