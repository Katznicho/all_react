export const initialState = {
    basket: [],
    user:null
}
export const getBasketTotal = (array) => (
    array.reduce((amount, item)=>(item.price + amount),0))

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.payload]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = state.basket
            const index = state.basket.findIndex((item) => item.id === action.payload)
            if (index >= 0) {
                newBasket.splice(index, 1)
                return {
                    ...state,
                    basket: newBasket
                }
            }
            else {
                return {
                    ...state
                }
            }
        case "SET_USER":
            return {
                ...state,
                user:action.payload
            }
           
    default:
        return state
    }
}
