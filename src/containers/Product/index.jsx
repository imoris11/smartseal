import React from "react";
import cart from "../../static/icon/cart-2.png";
function Product() {
  return (
    <div>
      <div className="product-header">
        <div className="row ">
          <div className="text-white">
            <div className="row" style={{ marginTop: "-18%" }}>
              <div className="col-sm-1">&nbsp; &nbsp; hi</div>
              <div className="col-sm-10"></div>
              <div className="col-sm-1">hello</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-box">
        <div style={{ marginLeft: "20px" }}>
          <h3>
            Men Running Shoes <br />
            Fashion Sneakers <br />
            Lace Up Green
          </h3>

          <p style={{ fontSize: "18px" }}>Sizes</p>
          <br />
          <div className="row">
            <p className="size-box">40</p>

            <p className="size-box">42</p>

            <p className="size-box">44</p>
          </div>

          <br />
          <p style={{ fontSize: "20px" }}>Description</p>
          <p>
            But I must explain to You how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give.. You a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </p>
        </div>
      </div>
      <div className="buy-now">
        <span
          style={{
            color: "white",
            fontSize: "22px",
          }}
        >
          <img src={cart} className="cart" alt="cart" /> Buy Now
        </span>
      </div>
    </div>
  );
}

export default Product;
