

const initiaState = {
    cart: [],
    totalCartQuantity: 0,
    totalCartPrice: 0,
}

const rechargeCart = (state=initiaState, action) =>{
    const getID = state.cart.find((item, index) => index === action.payload)    
    const getItem = state.cart.find(item => item === getID)

    switch (action.type){
        
        case "AddToRechargeCart":
            let newState = {
                ...state,
                cart: state.cart.concat(action.payload),
                totalCartQuantity: state.totalCartQuantity,
                totalCartPrice: state.totalCartPrice 
            }
            
            return newState;

        case "AddToTotalRechargePrice":
            let newRecahrgePrice = {
                ...state,
                cart: state.cart,
                totalCartQuantity: state.totalCartQuantity,
                totalCartPrice: action.payload
            }

            return newRecahrgePrice;
            

        case "RemoveFromRechargeCart":   
            let updatedState = state.cart.filter((item, index) => index !== action.payload)
            let newTotalCartPrice = state.totalCartPrice - Number(getItem.amount)
            return {
                ...state,
                cart: updatedState,
                totalCartPrice: newTotalCartPrice,
            };

        default:
            return state
    }
}

export default rechargeCart