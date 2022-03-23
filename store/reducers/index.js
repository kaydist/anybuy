import {combineReducers} from 'redux'
import purchaseQuantity from "./quantityReducer"
import cart from './cartReducer'
import Auth from './authReducer'
import rechargeCart from './rechargeReducer'
import screenSize from './screenSize'


const reducers = combineReducers({
    quantity: purchaseQuantity,
    cart: cart,
    auth: Auth,
    rechargeCart: rechargeCart,
    screenSize: screenSize
})

export default reducers
