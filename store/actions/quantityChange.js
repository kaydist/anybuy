export const  Increment=()=>{
    return (dispatch) => {
        dispatch({
            type: "increase",
        })
    }
}

export const  Decrement=()=>{
    return (dispatch) => {
        dispatch({
            type: "decrease",
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