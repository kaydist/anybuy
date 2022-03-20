import {combineReducers} from 'redux'
import purchaseQuantity from "./quantityReducer"
import cart from './cartReducer'
import Auth from './authReducer'
import rechargeCart from './rechargeReducer'


const reducers = combineReducers({
    quantity: purchaseQuantity,
    cart: cart,
    auth: Auth,
    rechargeCart: rechargeCart
})

export default reducers
