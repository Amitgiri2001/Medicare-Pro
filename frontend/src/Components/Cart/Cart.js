import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartReducer';

const Cart = () => {

    const cartData = useSelector((state) => state.cartData.cartItems);
    console.log(cartData);
    const dispatch = useDispatch();

    function decreaseQty(id) {
        dispatch(cartActions.decreaseQuantity(id))
    }
    return (
        <div>{
            cartData.map((cartItem) => <div>
                <h2>{cartItem.id}</h2>
                <p>{cartItem.qty}</p>
                <button onClick={() => dispatch(cartActions.increaseQuantity(cartItem.id))}>+</button>
                <button onClick={() => decreaseQty(cartItem.id)}>-</button>
            </div>)
        }</div>
    )
}

export default Cart