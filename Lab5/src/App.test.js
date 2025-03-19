jest.mock('./components/FakeAPICall', () => ({
    fakeApiCall: (data) => Promise.resolve(data),
}));

import { act } from 'react';
import React from 'react';
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store, { resetCart } from './store';
import App from './App';

describe('Simulating Checkout Flow...', () => {
    beforeAll(() => {
        localStorage.clear();
        store.dispatch(resetCart());
    });

    test('Adding product to cart -> Filling Checkout Form -> Checking out -> Analyzing the checked out data with filled data', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(screen.getByTestId('cart-count')).toHaveTextContent('0');

        // Check that the cart count updates to 1
        const productCards = screen.getAllByTestId('product-card');
        const incrementButton = within(productCards[0]).getByText('+');
        const valueElement = screen.getByTestId('cart-icon');
        act(() => {
            fireEvent.click(incrementButton);
        });

        expect(valueElement).toHaveTextContent('1');

        await waitFor(() => {
            expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
        });

        const cartIcon = screen.getByTestId('cart-icon');
        act(() => {
            fireEvent.click(cartIcon);
        });

        await waitFor(() => {
            expect(screen.getByRole('heading', { name: /checkout/i })).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        });

        act(() => {
            fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
            fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
            fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '1234567890' } });
            fireEvent.change(screen.getByLabelText(/address/i), { target: { value: '123 Main St' } });
            fireEvent.click(screen.getByRole('button', { name: /checkout/i }));
        });


        await waitFor(() => {
            expect(screen.getByText(/order created successfully/i)).toBeInTheDocument();
        });

        // Check the store's state after the checkout
        const state = store.getState();
        expect(state.cart.cartCount).toBe(0);

        // Ensure the orders slice exists and is an array
        expect(state.orders).toBeDefined();
        expect(Array.isArray(state.orders)).toBe(true);

        // Check if the order data has been stored correctly
        expect(state.orders).toHaveLength(1);
        expect(state.orders[0]).toMatchObject({
            name: 'John Doe',
            email: 'john@example.com',
            phone: '1234567890',
            address: '123 Main St',
            orderCount: 1,
        });
    });
});
