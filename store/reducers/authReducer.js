
let initialState = {
    currentUser: null
}
const Auth= (state=initialState, action) =>{    
    switch(action.type){
        case "login":     
            return {
                ...state,
                currentUser: action.payload
            };
        
        case "logout":
            return {
                ...state,
                currentUser: null
            };

        default:
            return state
        
    }
}

export default Auth