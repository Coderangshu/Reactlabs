import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Header Navigation', () => {
    test('clicking on "Orders" navigates to the Orders page', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        // Find the Orders link/button (assuming the link text contains "Orders")
        const ordersLink = screen.getByRole('link', { name: /orders/i });
        userEvent.click(ordersLink);

        // Assert that the Orders page content is rendered
        const ordersHeading = await screen.findByRole('heading', { name: /orders page/i });
        expect(ordersHeading).toBeInTheDocument();
    });

    test('clicking on "Product List" navigates to the Product List page', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        const productsLink = screen.getByRole('link', { name: /product list/i });
        userEvent.click(productsLink);

        // Assuming your Product List page renders a heading with "Product List Page"
        const productsHeading = await screen.findByRole('heading', { name: /product page/i });
        expect(productsHeading).toBeInTheDocument();
    });

    test('clicking on "Favourites" navigates to the Favourites page', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        const favouritesLink = screen.getByRole('link', { name: /favourites/i });
        userEvent.click(favouritesLink);

        // Assuming your Favourites page renders a heading with "Favourites Page"
        const favouritesHeading = await screen.findByRole('heading', { name: /favourites page/i });
        expect(favouritesHeading).toBeInTheDocument();
    });
});

