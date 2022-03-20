

const initiaState = {
    cart: [],
    totalCartQuantity: 0,
    totalCartPrice: 0,
}

const cart = (state=initiaState, action) =>{

    switch (action.type){
        
        case "AddToCart":
            const payloadId = action.payload.id
            const getID = state.cart.find(item => item.id === payloadId)
            const getIndex = state.cart.findIndex(item => item.id === payloadId)
            const getItem = state.cart.find(item => item === getID)

            if(getID === undefined){
                let newState = {
                    ...state,
                    cart: state.cart.concat(action.payload),
                    totalCartQuantity: state.totalCartQuantity + action.payload.quantity,
                    totalCartPrice: state.totalCartPrice + action.payload.totalItemPrice
                }
                return newState;
            }else{
                let newArray = [...state.cart]
                newArray[getIndex].quantity = getItem.quantity + 1
                newArray[getIndex].totalItemPrice = getItem.quantity * getItem.totalItemPrice
                let newState = {
                    ...state,
                    cart: newArray,
                    totalCartQuantity: state.totalCartQuantity + action.payload.quantity,
                    totalCartPrice: state.totalCartPrice + action.payload.totalItemPrice
                }
                return newState;
            }
            

        case "RemoveFromCart":
            const removeID = state.cart.find(item => item.id === action.payload)
            const removeItem = state.cart.find(item => item === removeID )
            console.log(removeItem)
            let newtotalCartQuantity = state.totalCartQuantity - removeItem.quantity
            let newtotalCartPrice = state.totalCartPrice - removeItem.totalItemPrice            
            let updatedState = state.cart.filter(item => item.id !== action.payload)
            
            return {
                ...state,
                cart: updatedState,
                totalCartPrice: newtotalCartPrice,
                totalCartQuantity: newtotalCartQuantity
            };

        default:
            return state
    }
}

export default cart