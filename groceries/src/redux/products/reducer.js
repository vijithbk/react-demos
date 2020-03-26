import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from './types';

import items from '../../data/products.js'

const initialState = {
    items,
    cart: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.title !== action.payload.title)
            }
        default:
            return state
    }
}

export default productsReducer;