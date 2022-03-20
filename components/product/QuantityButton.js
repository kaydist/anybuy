import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/actions';


function QuantityButton() {
    
    const quantity = (useSelector((state) => state.cart.cart))
    const dispatch = useDispatch();
    const {Increment, Decrement} = bindActionCreators(actionCreators, dispatch)

    return (
        <div className="flex flex-row gap-6 mt-3 items-center">
            <button className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
            onClick={Decrement}>-</button>
            {
                
            }
            <button 
            className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
            onClick={Increment}
            >+</button>
        </div>
    )
}

export default QuantityButton
