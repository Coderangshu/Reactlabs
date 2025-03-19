import { CREATE_ORDER } from './actions';

// Set initial state as an empty array instead of an object
const initialState = [];

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            // Return a new array with the added order
            return [...state, action.payload];
        default:
            return state;
    }
};

export default orderReducer;

