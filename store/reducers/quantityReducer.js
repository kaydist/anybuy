
const purchaseQuantity = (state = 1, action) =>{

    // const payloadId = action.payload.id
    // const getID = state.cart.find(item => item.id === payloadId)
    // const getIndex = state.cart.findIndex(item => item.id === payloadId)
    // const getItem = state.cart.find(item => item === getID)

    switch (action.type){
        case "increase":
            let ItemTotal = (action.payload.sellingPrice * action.payload.quantity)
            return state + 1

        case "decrease":
            if(state <= 1){
                return state = 1
            }else{
                return state - 1
            }
        default:
            return state
    }
}

export default purchaseQuantity