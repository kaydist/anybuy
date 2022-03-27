export const login=(data)=>{
    return {
        type: "login",
        payload: data
    }
}
export const logout=()=>{
    return {
        type: "logout"
    }
}