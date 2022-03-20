

const initiaState = {
    cart: [],
    totalCartQuantity: 0,
    totalCartPrice: 0,
}

const rechargeCart = (state=initiaState, action) =>{

    switch (action.type){
        
        case "AddToRechargeCart":
            let newState = {
                ...state,
                cart: action.payload,
                totalCartQuantity: state.totalCartQuantity + action.payload.quantity,
                totalCartPrice: state.totalCartPrice + action.payload.totalItemPrice
            }

            return newState;
            

        case "RemoveFromRechargeCart":           
            let updatedState = state.cart.filter((item, index) => index !== action.payload)
            return {
                ...state,
                cart: updatedState,
                // totalCartPrice: newtotalCartPrice,
                // totalCartQuantity: newtotalCartQuantity
            };

        default:
            return state
    }
}

export default rechargeCart