

const initiaState = {
    cart: [],
    totalCartQuantity: 0,
    totalCartPrice: 0,
}

const cart = (state=initiaState, action) =>{

    const getID = state.cart.find(item => item.id === action.payload.id)
    const getIndex = state.cart.findIndex(item => item.id === action.payload.id)
    const getItem = state.cart.find(item => item === getID)
    let newArray = [...state.cart]

    switch (action.type){
        
        case "AddToCart":

            if(getID === undefined){
                let newState = {
                    ...state,
                    cart: state.cart.concat(action.payload),
                    totalCartQuantity: state.totalCartQuantity + action.payload.quantity,
                    totalCartPrice: state.totalCartPrice +  action.payload.totalItemPrice
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
            let updatedState = state.cart.filter(item => item.id !== action.payload.id)
            
            return {
                ...state,
                cart: updatedState,
                totalCartPrice: state.totalCartPrice - getItem.totalItemPrice,
                totalCartQuantity: state.totalCartQuantity - getItem.quantity,
            };
        
        case "increaseQuantity":
            newArray[getIndex].quantity = getItem.quantity + 1
            newArray[getIndex].totalItemPrice = getItem.totalItemPrice + Number(action.payload.sellingPrice)
            
            let newState = {
                ...state,
                cart: newArray,
                totalCartQuantity: state.totalCartQuantity + 1,
                totalCartPrice: state.totalCartPrice + Number(action.payload.sellingPrice)
            }
            return newState;

        case "decreaseQuantity":   
            newArray[getIndex].quantity = getItem.quantity - 1
            newArray[getIndex].totalItemPrice = getItem.totalItemPrice - Number(action.payload.sellingPrice)
            
            return {
                ...state,
                cart: newArray,
                totalCartQuantity: state.totalCartQuantity - 1,
                totalCartPrice: state.totalCartPrice - Number(action.payload.sellingPrice)
            };


        default:
            return state
    }
}

export default cart