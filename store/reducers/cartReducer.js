import { UpdateCart } from "../../Config/firebase"
import { useSelector } from "react-redux"

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

    const UploadCart=(newState)=>{        
        let AuthState = useSelector((state)=> state.auth)
        UpdateCart(newState, AuthState.currentUser.currentUser.uid);
    }

    switch (action.type){
        
        case "AddToCart":
            if(getID === undefined){
                let newState = {
                    ...state,
                    cart: state.cart.concat(action.payload),
                    totalCartQuantity: state.totalCartQuantity + action.payload.quantity,
                    totalCartPrice: state.totalCartPrice +  action.payload.totalItemPrice
                }
                UploadCart(newState)
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
                UploadCart(newState)
                return newState;
            }
            

        case "RemoveFromCart": 
            let newTotalCartPrice = state.totalCartPrice - getItem.totalItemPrice 
            let newTotalCartQuantity = state.totalCartQuantity - getItem.quantity
            let updatedState = state.cart.filter(item => item.id !== action.payload.id)
            let newRemoveState = {
                ...state,
                totalCartPrice: newTotalCartPrice,
                totalCartQuantity: newTotalCartQuantity,                
                cart: updatedState
            }
        
            return newRemoveState;
        
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