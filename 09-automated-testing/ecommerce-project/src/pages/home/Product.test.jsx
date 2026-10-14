import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { Product } from './Product';

vi.mock('axios');

describe('Product component', () => {
  let product;
  let loadCart;

  beforeEach(() => {
    vi.clearAllMocks();
    product = {
      id: 'product-1',
      image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
      name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
      rating: { stars: 4.5, count: 87 },
      priceCents: 1090,
      keywords: ['socks', 'sports', 'apparel'],
    };
    axios.post.mockResolvedValue({ data: {} });
    loadCart = vi.fn().mockResolvedValue(undefined);
  });

  it('displays product details correctly', () => {
    render(<Product product={product} loadCart={loadCart} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText('$10.90')).toBeInTheDocument();
    expect(screen.getByTestId('product-image')).toHaveAttribute('src', product.image);
    expect(screen.getByTestId('product-rating-stars-image')).toHaveAttribute('src', 'images/ratings/rating-45.png');
    expect(screen.getByText('87')).toBeInTheDocument();
  });

  it('adds one product to the cart by default', async () => {
    const user = userEvent.setup();
    render(<Product product={product} loadCart={loadCart} />);

    await user.click(screen.getByTestId('add-to-cart-button'));

    expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
      productId: 'product-1',
      quantity: 1,
    });
    expect(loadCart).toHaveBeenCalledTimes(1);
  });

  it('adds the selected quantity to the cart', async () => {
    const user = userEvent.setup();
    render(<Product product={product} loadCart={loadCart} />);

    await user.selectOptions(screen.getByRole('combobox'), '3');
    await user.click(screen.getByTestId('add-to-cart-button'));

    expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
      productId: 'product-1',
      quantity: 3,
    });
  });

  it('shows the added-to-cart message after adding successfully', async () => {
    const user = userEvent.setup();
    render(<Product product={product} loadCart={loadCart} />);

    await user.click(screen.getByTestId('add-to-cart-button'));

    expect(await screen.findByText('Added')).toBeInTheDocument();
  });
});
