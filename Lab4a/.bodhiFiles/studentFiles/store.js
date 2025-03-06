import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state (initiate cartCount)
const initialState = {
};

// Create slice (automatically creates action creators and reducer)
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementCart: (state) => {
            // logic to increment cartCount
        },
        decrementCart: (state) => {
            // logic to decrement cartCount
        },
        resetCart: (state) => {
            // logic to reset cartCount
        },
    },
});

// Export the actions 


// Create the store along with redux thunk
const store

export default store;
