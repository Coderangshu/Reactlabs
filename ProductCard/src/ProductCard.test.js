import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product information correctly', () => {
  const product = { name: 'Sample Product', price: 20 };
  render(<ProductCard product={product} />);

  const productName = screen.getByText(/Sample Product/i);
  const productPrice = screen.getByText(/Price: \$20/i);

  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});

test('increments and decrements quantity correctly', () => {
  const product = { name: 'Sample Product', price: 20 };
  render(<ProductCard product={product} />);

  const incrementButton = screen.getByText(/\+/);
  const decrementButton = screen.getByText(/-/);
  const quantityDisplay = screen.getByText('0');

  fireEvent.click(incrementButton);
  expect(quantityDisplay.textContent).toBe('1');

  fireEvent.click(decrementButton);
  expect(quantityDisplay.textContent).toBe('0');
});

