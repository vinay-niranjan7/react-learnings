import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';

describe('formatMoney', () => {
  it('formats cents as dollars with two decimal places', () => {
    expect(formatMoney(1999)).toBe('$19.99');
    expect(formatMoney(1090)).toBe('$10.90');
    expect(formatMoney(100)).toBe('$1.00');
  });

  it('formats zero and whole-dollar amounts', () => {
    expect(formatMoney(0)).toBe('$0.00');
    expect(formatMoney(2000)).toBe('$20.00');
  });
});
