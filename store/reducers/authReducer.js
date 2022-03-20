let initialState = {
    loggedIn : false
}

const Auth= (state=initialState, action) =>{

    switch(action.type){
        case "login":
            return {
                ...state,
                loggedIn: true
            };
        
        case "logout":
            return {
                ...state,
                loggedIn: false
            };

        default:
            return state
        
    }
}

export default Auth