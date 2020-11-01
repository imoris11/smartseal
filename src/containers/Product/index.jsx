import React from 'react';
import arrow from '../../static/icon/arrow.svg';
import cart from '../../static/icon/cart.svg';
import './product.css';

function Product() {
  return (
    <div className='product-page'>
      <div className='product-header'>
        <div className='icons'>
          <img src={arrow} className='cart' alt='cart' />
          <img src={cart} className='cart' alt='cart' />
        </div>

        <div className='tabs'>
          <div className='div-one'></div>
          <div className='div-two'></div>
          <div className='div-three'></div>
        </div>
      </div>

      <div className='product-box'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12'>
              <div style={{ marginLeft: '20px' }}>
                <h3>
                  Men Running Shoes <br />
                  Fashion Sneakers <br />
                  Lace Up Green
                </h3>

                <h4>Sizes</h4>
                <br />
                <div className='sizes'>
                  <p className='size-box'>40</p>

                  <p className='size-box'>42</p>

                  <p className='size-box'>44</p>
                </div>

                <br />
                <h4>Description</h4>
                <p>
                  But I must explain to You how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will
                  give.. You a complete account of the system, and expound the
                  actual teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-12'>
            <button className='buy-now'>
              <img src={cart} className='cart' alt='cart' /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
