import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default is localStorage

// Initial state
const initialState = {
    cartCount: 0,
};

// Create slice (automatically creates action creators and reducer)
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementCart: (state) => {
            state.cartCount += 1;
        },
        decrementCart: (state) => {
            state.cartCount = Math.max(0, state.cartCount - 1);
        },
        resetCart: (state) => {
            state.cartCount = 0;
        },
    },
});

// Export the actions 
export const { incrementCart, decrementCart, resetCart } = cartSlice.actions;

// Configure persist
// Use localStorage for persistence
const persistConfig = {
};

// Create a persisted reducer
const persistedReducer = ;


// Create the store 
const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore redux-persist actions
            },
        }),
});

// Create the persistor using the persistStore
export const persistor = ;

export default store;
