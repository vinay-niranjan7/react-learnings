# Automated testing (Lesson 09)

These tests were added to the original Lesson 08 `ecommerce-project` without replacing its data-mutation implementation.

## Install dependencies

From this folder, run:

```bash
npm install
```

## Run tests

```bash
npm test
```

For watch mode:

```bash
npm run test:watch
```

## Test coverage

- `src/pages/home/HomePage.test.jsx`: mocks the products API and checks that products are fetched and rendered.
- `src/pages/home/Product.test.jsx`: checks product details, default quantity, selected quantity, cart API payload, cart reload, and the success message.
- `src/utils/money.test.js`: checks currency formatting.

Vitest runs in `jsdom`, and `setupTests.js` loads the `jest-dom` matchers.
