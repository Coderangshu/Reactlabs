import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import products from './productList';


const d = new Date();
let year = d.getFullYear();

test('Rendered Header Report', () => {
    render(<Header />);
    const headerElement = screen.getByText(/E-Commerce Site/i);
    expect(headerElement).toBeInTheDocument();
});

test('Rendered Footer Report', () => {
    render(<Footer />);
    const footerElement = screen.getByText(new RegExp(`© ${year} E-Commerce Site`, 'i'));
    expect(footerElement).toBeInTheDocument();
});

test('Rendered Product list Report', () => {
    // Render the ProductList component with mock products
    render(<ProductList products={products} />);

    // Find the list by its test ID
    const productList = screen.getByTestId('product-list');

    // Assert that the number of rendered products matches the number of products in the mock data
    const productItems = screen.getAllByRole('listitem'); // Query all <li> elements
    expect(productItems).toHaveLength(products.length);

    // Check that each product name is rendered correctly
    products.forEach((product) => {
        expect(screen.getByText(new RegExp(product.name, 'i'))).toBeInTheDocument();
    });

    // // Check that each product price is rendered correctly
    products.forEach((product) => {
        expect(screen.getByText(new RegExp(product.price, 'i'))).toBeInTheDocument();
    });
});
