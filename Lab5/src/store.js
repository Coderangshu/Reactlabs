import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default is localStorage
import { combineReducers } from '@reduxjs/toolkit';
import orderReducer from './redux/reducer'; // This is your orders reducer file

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
const persistConfig = {
    key: 'cartCount', // The key for localStorage (could be anything)
    storage, // Use localStorage for persistence
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

// Combine cart and orders reducers
const rootReducer = combineReducers({
    cart: persistedReducer,
    orders: orderReducer,
});

// Create the store with both reducers
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore redux-persist actions
            },
        }),
});


// Create the persistor
export const persistor = persistStore(store);

export default store;



