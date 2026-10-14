# Day 9 – Automated Testing with Vitest

This lesson introduces automated testing in the React ecommerce project. Tests check that individual functions and React components behave as expected, without having to verify every behavior manually in the browser.

## Topics Covered

1. **Automated testing with Vitest** – run repeatable checks against code.
2. **Unit tests** – test one small piece of code, such as a utility function.
3. **`describe()`, `it()`, and `expect()`** – group tests, define individual test cases, and assert expected results.
4. **Integration tests** – check how multiple pieces of an application work together.
5. **Testing React components** – use `render()` to mount a component and `screen` to find what appears on the page.
6. **Mocking dependencies** – replace a real dependency, such as Axios, with a controlled fake using `vi.mock()`.
7. **Mock implementations and functions** – use `vi.fn()` and mock return values to control and inspect behavior.
8. **User interactions** – use React Testing Library's `userEvent` to simulate selecting a quantity and clicking a button.

## 1. What Is Automated Testing?

Automated tests execute code and check whether its actual behavior matches the expected behavior. They help catch regressions when the application changes.

- **Unit test:** checks a small isolated unit, such as `formatMoney()`.
- **Integration/component test:** checks multiple pieces working together, such as a page fetching products and rendering product cards.
- **Mock:** a controlled replacement for a dependency, often used to avoid real network requests during tests.

## 2. Test Setup

The project uses Vitest with React Testing Library and `jsdom`.

### Dependencies in this project

- `vitest` – test runner and assertion APIs.
- `@testing-library/react` – renders React components for tests.
- `@testing-library/jest-dom` – adds DOM assertions such as `toBeInTheDocument()`.
- `@testing-library/user-event` – simulates user interactions.
- `jsdom` – provides a simulated browser DOM environment for tests.

The uploaded project already includes these packages in `package.json`.

### `vitest.config.js`

```js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
  },
});
```

- `environment: 'jsdom'` allows component tests to use browser-like DOM APIs.
- `globals: true` makes test functions available globally, although the current tests also explicitly import functions from `vitest`.
- `setupFiles` loads shared setup before test files run.

### `setupTests.js`

```js
import '@testing-library/jest-dom';
```

This registers useful DOM matchers, including `toBeInTheDocument()` and `toHaveAttribute()`.

## 3. Unit Test: `formatMoney()`

File: `src/utils/money.test.js`

The utility converts an amount in cents to a dollar string with two decimal places.

```js
import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';

describe('formatMoney', () => {
  it('formats cents as dollars with two decimal places', () => {
    expect(formatMoney(1999)).toBe('$19.99');
    expect(formatMoney(1090)).toBe('$10.90');
    expect(formatMoney(100)).toBe('$1.00');
  });
});
```

Key points:

- `describe()` groups related tests.
- `it()` defines a single test case.
- `expect(actual).toBe(expected)` compares the actual result with the expected result.
- The tests also check zero and whole-dollar values, such as `formatMoney(0)` and `formatMoney(2000)`.

## 4. Component Test: `Product`

File: `src/pages/home/Product.test.jsx`

The tests render the `Product` component with sample product data and a mocked `loadCart` function. They check that:

- Product name, formatted price, image, rating image, and rating count appear correctly.
- Clicking **Add to Cart** sends the expected request to Axios.
- The selected quantity is included in the request body.
- `loadCart()` is called after a successful request.
- An **Added** confirmation appears after adding a product.

Example interaction test:

```jsx
const user = userEvent.setup();
render(<Product product={product} loadCart={loadCart} />);

await user.selectOptions(screen.getByRole('combobox'), '3');
await user.click(screen.getByTestId('add-to-cart-button'));

expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
  productId: 'product-1',
  quantity: 3,
});
```

`userEvent` simulates the user's actions, while the assertion verifies the API call that the component makes in response.

## 5. Mocking Axios

Both `Product.test.jsx` and `HomePage.test.jsx` use:

```js
vi.mock('axios');
```

This replaces Axios with a mock so the tests do not need to contact the real backend. The tests can configure predictable responses:

```js
axios.get.mockResolvedValue({ data: [/* sample products */] });
axios.post.mockResolvedValue({ data: {} });
```

Other mock utilities in the project:

- `vi.fn()` creates a mock function, used for `loadCart`.
- `mockResolvedValue()` defines the value a mocked asynchronous call resolves to.
- `vi.clearAllMocks()` clears recorded mock calls between tests.
- `beforeEach()` runs setup before each test, helping tests remain independent.

## 6. Integration Test: `HomePage`

File: `src/pages/home/HomePage.test.jsx`

The test wraps `HomePage` in `MemoryRouter`, mocks the products API response, and checks that the page requests products and renders each product.

```jsx
render(
  <MemoryRouter>
    <HomePage cart={[]} loadCart={loadCart} />
  </MemoryRouter>
);

const productContainers = await screen.findAllByTestId('product-container');

expect(axios.get).toHaveBeenCalledWith('/api/products');
expect(productContainers).toHaveLength(2);
```

- `MemoryRouter` provides routing context required by components that use React Router.
- `findAllByTestId()` waits for matching elements to appear, which is useful when rendering depends on asynchronous data.
- `within()` scopes a query to one product container so the test can verify the correct product appears in each card.

## Test Files in This Project

| Test file | What it checks | Test type |
| --- | --- | --- |
| `src/utils/money.test.js` | Currency formatting for cents, zero, and whole-dollar amounts | Unit test |
| `src/pages/home/Product.test.jsx` | Product display, quantity selection, add-to-cart request, cart reload, and success message | Component/interaction test |
| `src/pages/home/HomePage.test.jsx` | Product API request and rendering the returned products | Component integration test |

## Project Structure

```text
09/
├── ecommerce-backend/
└── ecommerce-project/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   │   ├── home/
    │   │   │   ├── HomePage.jsx
    │   │   │   ├── HomePage.test.jsx
    │   │   │   ├── Product.jsx
    │   │   │   └── Product.test.jsx
    │   │   ├── checkout/
    │   │   ├── orders/
    │   │   └── tracking/
    │   └── utils/
    │       ├── money.js
    │       └── money.test.js
    ├── setupTests.js
    ├── vitest.config.js
    ├── TESTING.md
    └── package.json
```

## Run the Tests

Open a terminal in the `ecommerce-project` directory.

```bash
npm install
npm test
```

The `test` script runs Vitest. The project also provides watch mode:

```bash
npm run test:watch
```

Watch mode reruns tests as files change. See `ecommerce-project/TESTING.md` for the project-specific testing notes.

## Key Takeaways

- Automated tests check expected behavior consistently and help prevent regressions.
- Unit tests focus on one small unit; component and integration tests verify interactions between parts of the app.
- `describe()`, `it()`, and `expect()` organize and assert test cases.
- React Testing Library's `render()` and `screen` help test what a user can see.
- `userEvent` simulates realistic user actions.
- Mocks let tests control dependencies and avoid making real API calls.
- `vi.fn()`, `vi.mock()`, `mockResolvedValue()`, and `vi.clearAllMocks()` are useful mock tools.
- Asynchronous UI should be tested with async queries such as `findBy...` or `findAllBy...` when appropriate.

## Resources

- [SuperSimpleDev React course](https://youtu.be/TtPXvEcE11E)
- [Official React course repository](https://github.com/SuperSimpleDev/react-course)
- [Official lesson links and package versions](https://github.com/SuperSimpleDev/react-course/blob/main/1-links.md)
- [Vitest documentation](https://vitest.dev/guide/)
- [Vitest mocking guide](https://vitest.dev/guide/mocking.html)
- [React Testing Library documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library user-event](https://testing-library.com/docs/user-event/intro/)
- [jest-dom matchers](https://github.com/testing-library/jest-dom)

## Progress

- [x] Set up Vitest and the DOM test environment.
- [x] Configure shared test setup with `jest-dom`.
- [x] Write unit tests for `formatMoney()`.
- [x] Test product details and add-to-cart behavior.
- [x] Mock Axios to control API responses.
- [x] Test that `HomePage` fetches and displays products.
- [x] Simulate user interactions with `userEvent`.
