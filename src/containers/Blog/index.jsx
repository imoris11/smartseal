import React from "react";
import pills from "../../static/img/Thinkstock.png";
import TellUs from "../../reuseables/tell-us";
import Latest from "../../reuseables/latest-story";
function Features() {
  return (
    <div>
      <div className="blog-header">
        <div className="container">
          <div className="row " style={{ paddingTop: "20vh" }}>
            <div className="row">
              <div className="col-sm-5">
                <img src={pills} className="pills" alt="pills" />
              </div>
              <div className="col-sm-7" style={{ paddingTop: "8vh" }}>
                <div className="col fashion-text text-white">
                  <div className="feature-button">
                    <p>Featured</p>
                  </div>

                  <h2>
                    Medicine and Up to date <br />
                    values in authenticity.
                  </h2>
                  <p>By: SmartSeal . October 9 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div style={{ backgroundColor: "F6F6EF" }}>
          <h2 style={{ textAlign: "center", padding: "5%" }}>Latest Stories</h2>
          <Latest />
          <Latest />
        </div>
      </div>
      <div className="container-fluid">
        <div style={{ backgroundColor: "#FFFCE3" }}>
          <h2 style={{ textAlign: "center", padding: "5%" }}>
            Recommended For You
          </h2>
          <Latest />
        </div>
      </div>

      <TellUs />
    </div>
  );
}

export default Features;
