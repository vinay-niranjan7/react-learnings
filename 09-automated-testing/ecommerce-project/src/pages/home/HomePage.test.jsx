import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import axios from 'axios';
import { HomePage } from './HomePage';

vi.mock('axios');

describe('HomePage component', () => {
  let loadCart;

  beforeEach(() => {
    vi.clearAllMocks();
    loadCart = vi.fn();

    axios.get.mockResolvedValue({
      data: [
        {
          id: 'product-1',
          image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
          name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
          rating: { stars: 4.5, count: 87 },
          priceCents: 1090,
          keywords: ['socks', 'sports', 'apparel'],
        },
        {
          id: 'product-2',
          image: 'images/products/intermediate-composite-basketball.jpg',
          name: 'Intermediate Size Basketball',
          rating: { stars: 4, count: 127 },
          priceCents: 2095,
          keywords: ['sports', 'basketballs'],
        },
      ],
    });
  });

  it('requests products and displays each product', async () => {
    render(
      <MemoryRouter>
        <HomePage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );

    const productContainers = await screen.findAllByTestId('product-container');

    expect(axios.get).toHaveBeenCalledWith('/api/products');
    expect(productContainers).toHaveLength(2);
    expect(within(productContainers[0]).getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')).toBeInTheDocument();
    expect(within(productContainers[1]).getByText('Intermediate Size Basketball')).toBeInTheDocument();
  });
});
