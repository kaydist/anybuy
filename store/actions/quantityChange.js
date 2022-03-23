export const  Increment=(item)=>{
    return{
        type: "increaseQuantity",
        payload: item
    }
}

export const  Decrement=(item)=>{
    return (dispatch) => {
        dispatch({
            type: "decreaseQuantity",
            payload: item
        })
    }
}

export const AddToCart = (item) => {
    return {
        type: "AddToCart",
        payload: item
    }
}

export const RemoveFromCart = (itemId) => {
    return{
        type: "RemoveFromCart",
        payload: itemId
    }
}

export const AddToRechargeCart = (item) =>{
    return {
        type: "AddToRechargeCart",
        payload: item
    }
}
export const RemoveFromRechargeCart = (item) =>{
    return {
        type: "RemoveFromRechargeCart",
        payload: item
    }
}