import React, { useState, useEffect, useContext, createContext } from 'react';

function Item({price, setTemp}) {
    const [qty, setQty] = useState(1);
    const [value, setValue] = useState(price);

    useEffect(() => {
        setValue((price * qty).toFixed(2));
    }, [qty])    

    return (
        <div>
            <div className='price'>
                <p>Rs. {price}</p>
                <p>Total Rs. <span className='total-value'>{value}</span></p>               
            </div>
            <div className='quantity'>
                <button onClick={() => {
                    if (qty > 0) { setQty(qty => qty - 1) }
                }}>-</button>
                <p><span className='qty'>{qty}</span></p>
                <button onClick={() => setQty(qty => qty + 1)}>+</button>                
            </div>
        </div>
    )
}

export default Item
