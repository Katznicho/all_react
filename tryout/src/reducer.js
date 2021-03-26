export const initialState = {
    basket: [],
    user:null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CHART":
            return {
                 ...state, basket:[...state.basket, action.payload]
            }
        case "REGISTER_USER":
            return {
                ...state,
                user:action.payload
            }
        default:
            return state
    }
}