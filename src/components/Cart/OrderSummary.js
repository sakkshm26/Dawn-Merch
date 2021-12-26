import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'

function OrderSummary() {
    const state = useSelector(state => state.handleCart);

    return (
        <div className='order'>
            <h3>Order Summary</h3>
            <hr />
            <div className='coupons'>
                <h4>Coupons</h4>
                <div className='coupon-code'>
                    <input type='text' placeholder='Enter Coupon Code' />
                    <button>APPLY</button>
                </div>
            </div>
            <hr />
            <div className='price-details'>
                <p>MRP </p>
                <p>Coupon Discount</p>
                <p>Delivery Charges</p>
                <hr></hr>
                <p>Total</p>
            </div>
            <button>PLACE ORDER</button>
        </div>
    )
}

export default OrderSummary
