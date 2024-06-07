import React from 'react'
import './Cart.css'
function Cart() {
  return (
      <div>
          <div className="cart_details">
              <h3>Products</h3>
              <div className="cart_details_product">
                  <img src="" alt="shoe" />
                  <h4>Nike shoe</h4>
                  
                  <div className="cart_details_product_info">
                      <h2>$30</h2>
                  </div>
              </div>

          </div>
          <div className="payment_details">
              
              <h2>Total Amount </h2>
             <button>Pay Now</button>   
              <h2 className='pay'>$30</h2>
            
          </div>
          
         
         
    </div>
  )
}

export default Cart