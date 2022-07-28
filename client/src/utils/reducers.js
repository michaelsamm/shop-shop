import { useReducer } from 'react';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_PRODUCTS
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

        // if action type value is the value of 'UPDATE_CATEGORIES', return object with updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };
        
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        // if it's none of these actions, do not update state at all and keep thing the same
        default:
            return state;
    }
}

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}