import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

describe('Cart Functionality', () => {
  // Test Cart icon displays 0 initially
  test('Rendered Cart Icon count displays initial cart count as 0', () => {
    render(<App />);
    const cartCount = screen.getByText('0');
    expect(cartCount).toBeInTheDocument();
  });

  test('Rendered cart increments count when + button is clicked', () => {
    render(<App />);
    const productCards = screen.getAllByTestId('product-card');
    const incrementButton = within(productCards[0]).getByText('+');
    fireEvent.click(incrementButton);
    const cartCount = screen.getByText('1');
    expect(cartCount).toBeInTheDocument();
  });

  test('Rendered cart decrements count when - button is clicked', () => {
    render(<App />);
    const productCards = screen.getAllByTestId('product-card');
    const incrementButton = within(productCards[0]).getByText('+');
    const decrementButton = within(productCards[0]).getByText('-');

    fireEvent.click(incrementButton);  // increment to 1
    fireEvent.click(decrementButton);  // decrement to 0
    const cartCount = screen.getByText('0');
    expect(cartCount).toBeInTheDocument();
  });

  test('Rendered cart count does not go below 0', () => {
    render(<App />);
    const productCards = screen.getAllByTestId('product-card');
    const decrementButton = within(productCards[0]).getByText('-');
    fireEvent.click(decrementButton);  // try to decrement from 0
    const cartCount = screen.getByText('0');
    expect(cartCount).toBeInTheDocument();
  });
});
