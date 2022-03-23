import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Increment, Decrement } from '../../store/actions/quantityChange';


function QuantityButton({product}) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-row gap-6 mt-3 items-center">
            {
                product.quantity === 1
                ? <button 
                disabled
                className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
                onClick={()=>{
                    dispatch(Decrement(product))
                }}
                >-</button>
                : <button 
                className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
                onClick={()=>{
                    dispatch(Decrement(product))
                }}
                >-</button>
            }
            {product.quantity}
            <button 
            className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
            onClick={()=>{
                dispatch(Increment(product))
            }}
            >+</button>
        </div>
    )
}

export default QuantityButton
