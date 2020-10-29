import authentic from "../static/img/authentic.png";
import parts from "../static/img/parts.png";

function Latest() {
  return (
    <div
      className="row"
      style={{
        paddingLeft: "7%",
        paddingRight: "7%",
        paddingBottom: "7%",
      }}
    >
      <div className="col-sm-4">
        <img
          src={authentic}
          className="authentic"
          alt="authentic"
          style={{ marginBottom: "20px" }}
        />
        <span className="feature-bold-text">
          Importance Of Product <br /> Authentication
        </span>
        <p className="feature-small-text" style={{ color: "#2DAA8D" }}>
          By: SmartSeal . October 9 2020
        </p>
      </div>
      <div className="col-sm-4">
        <img
          src={parts}
          className="parts"
          alt="parts"
          style={{ marginBottom: "20px" }}
        />
        <p className="feature-bold-text">
          Authenticated Engineering products and its values
        </p>
        <p className="feature-small-text" style={{ color: "#2DAA8D" }}>
          By: SmartSeal . October 9 2020
        </p>
      </div>
      <div className="col-sm-4">
        <img
          src={parts}
          className="parts"
          alt="parts"
          style={{ marginBottom: "20px" }}
        />
        <p className="feature-bold-text">
          Medicine and Up to date values in authenticity.
        </p>
        <p className="feature-small-text" style={{ color: "#2DAA8D" }}>
          By: SmartSeal . October 9 2020{" "}
        </p>
      </div>
    </div>
  );
}

export default Latest;
