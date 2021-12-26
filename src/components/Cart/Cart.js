import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart, delCart } from '../../redux/action'
import './Cart.css'
import Item from './Item'
import OrderSummary from './OrderSummary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart() {
    const state = useSelector(state => state.handleCart);
    const dispatch = useDispatch();

    const delProduct = product => {
        dispatch(delCart(product));
    }
    
    const cartItems = cartItem => {       
        return (
            <div className='product-section'>
                <div className='cart-product'>
                    <img src={cartItem.image}></img>
                    <div className='details'>
                        <h3 className='title'>{cartItem.title.substring(0, 18)}</h3>
                        <p className='category'>{cartItem.category.toUpperCase()}</p>
                        <p className='rating'>{cartItem.rating.rate} ★</p>
                        <div className='data'>
                            <Item price={cartItem.price}/>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faTrash} className='delete-icon' onClick={() => delProduct(cartItem)}/>
            </div>
        )
    }

    return (
        <div className='cart'>
            {state.length ? <div className='cart-items'>{state.map(cartItems)}</div> :
                <div className='empty'>
                    <h1>Your Cart is Empty!</h1>
                    <p>Let's buy something</p>
                </div>}
        </div>
    )
}

export default Cart
