import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

// Test Cart icon displays 0 initially
test('Initial value of cart count is 0: ', () => {
  render(<App />);
  const cartCount = screen.getByText('0');
  expect(cartCount).toBeInTheDocument();
});

test('Cart value increments when + button is clicked: ', () => {
  render(<App />);
  const productCards = screen.getAllByTestId('product-card');
  const incrementButton = within(productCards[0]).getByText('+');
  fireEvent.click(incrementButton);
  const cartCount = screen.getByText('1');
  expect(cartCount).toBeInTheDocument();
});

test('Cart value decrements when - button is clicked: ', () => {
  render(<App />);
  const productCards = screen.getAllByTestId('product-card');
  const incrementButton = within(productCards[0]).getByText('+');
  const decrementButton = within(productCards[0]).getByText('-');

  fireEvent.click(incrementButton);  // increment to 1
  fireEvent.click(decrementButton);  // decrement to 0
  const cartCount = screen.getByText('0');
  expect(cartCount).toBeInTheDocument();
});

test('Rendered cart count does not go below 0: ', () => {
  render(<App />);
  const productCards = screen.getAllByTestId('product-card');
  const decrementButton = within(productCards[0]).getByText('-');
  fireEvent.click(decrementButton);  // try to decrement from 0
  const cartCount = screen.getByText('0');
  expect(cartCount).toBeInTheDocument();
});
