# Day 8 – Data Mutation, Finish the Ecommerce Project

This lesson focuses on **changing backend data from a React application**. The ecommerce project now supports adding products to the cart, updating quantities and delivery options, removing cart items, recalculating the payment summary, and creating orders.

## Topics Covered

1. **Data mutation** – updating data stored by the backend.
2. **HTTP request methods** – `GET`, `POST`, `PUT`, and `DELETE`.
3. **POST requests** – add products to the cart and create an order.
4. **PUT requests** – update cart quantities and delivery options.
5. **DELETE requests** – remove products from the cart.
6. **`useEffect` dependency arrays** – refresh the payment summary when the cart changes.
7. **`useNavigate`** – navigate to another page from code.

## 1. Data Fetching vs. Data Mutation

- **Data fetching** retrieves data from the backend, usually with a `GET` request.
- **Data mutation** creates, updates, or deletes backend data.

In this project, Axios sends HTTP requests to the backend API. When a mutation succeeds, the frontend calls `loadCart()` to fetch the latest cart data and update the UI.

## 2. HTTP Request Methods

| Method | Purpose | Example in this project |
| --- | --- | --- |
| `GET` | Read data | Fetch products, cart items, delivery options, orders, or payment summary |
| `POST` | Create data or trigger an operation | Add a product to the cart or create an order |
| `PUT` | Update existing data | Change cart quantity or delivery option |
| `DELETE` | Remove data | Delete a cart item |

## 3. Add a Product to the Cart – POST

The `Product` component sends the product ID and selected quantity to the backend:

```jsx
await axios.post('/api/cart-items', {
  productId: product.id,
  quantity
});

await loadCart();
```

The backend updates the cart. Calling `loadCart()` afterwards refreshes the cart state in `App`, allowing the header/cart count and other components to display the latest data.

The component also uses local state to show a temporary **Added** message.

## 4. Update Cart Data – PUT

### Update quantity

The checkout page lets the user select a quantity. The update handler validates the quantity before sending it:

```jsx
await axios.put(`/api/cart-items/${cartItem.productId}`, {
  quantity: parsedQuantity
});

await loadCart();
```

The current project validates that the quantity is an integer between 1 and 10.

### Update delivery option

Selecting a delivery option updates the cart item's `deliveryOptionId`:

```jsx
await axios.put(`/api/cart-items/${cartItem.productId}`, {
  deliveryOptionId: deliveryOption.id
});

await loadCart();
```

Both operations use the same `PUT` endpoint but update different fields.

## 5. Delete a Cart Item – DELETE

The Delete button removes the selected product from the backend cart:

```jsx
await axios.delete(`/api/cart-items/${cartItem.productId}`);
await loadCart();
```

The cart is fetched again so the removed product disappears from the UI and the cart state stays synchronized with the backend.

## 6. Update the Payment Summary with a Dependency Array

The checkout page fetches delivery options and payment summary data inside `useEffect`:

```jsx
useEffect(() => {
  const fetchCheckoutData = async () => {
    const deliveryResponse = await axios.get(
      '/api/delivery-options?expand=estimatedDeliveryTime'
    );
    setDeliveryOptions(deliveryResponse.data);

    const paymentResponse = await axios.get('/api/payment-summary');
    setPaymentSummary(paymentResponse.data);
  };

  fetchCheckoutData();
}, [cart]);
```

The dependency array `[cart]` tells React to run the effect when the `cart` value changes. Since cart updates trigger a new cart state after `loadCart()`, the checkout page requests a fresh payment summary.

The backend calculates values such as item count, product cost, shipping cost, tax, and total cost. The frontend displays the response rather than calculating all these totals itself.

## 7. Create an Order and Navigate with `useNavigate`

The Place your order button sends a `POST` request to create an order:

```jsx
const navigate = useNavigate();

const createOrder = async () => {
  await axios.post('/api/orders');
  await loadCart();
  navigate('/orders');
};
```

The backend creates an order from the current cart and empties the cart. The frontend then reloads the cart and navigates to the Orders page.

- `useNavigate()` returns a function that can navigate programmatically.
- `navigate('/orders')` moves the user to the Orders route without using a normal anchor link.

## Project Structure

```text
08/
├── ecommerce-backend/
│   ├── documentation.md
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── ...
└── ecommerce-project/
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   ├── pages/
    │   │   ├── home/
    │   │   │   ├── HomePage.jsx
    │   │   │   ├── ProductsGrid.jsx
    │   │   │   └── Product.jsx
    │   │   ├── checkout/
    │   │   │   ├── CheckoutPage.jsx
    │   │   │   ├── OrderSummary.jsx
    │   │   │   ├── DeliveryOptions.jsx
    │   │   │   └── PaymentSummary.jsx
    │   │   ├── orders/
    │   │   └── tracking/
    │   └── utils/
    ├── package.json
    └── ...
```

## Main API Endpoints Used

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/products` | `GET` | Get products for the home page |
| `/api/cart-items?expand=product` | `GET` | Load cart items with product details |
| `/api/cart-items` | `POST` | Add a product to the cart |
| `/api/cart-items/:productId` | `PUT` | Update quantity or delivery option |
| `/api/cart-items/:productId` | `DELETE` | Remove a cart item |
| `/api/delivery-options?expand=estimatedDeliveryTime` | `GET` | Load delivery options and estimated dates |
| `/api/payment-summary` | `GET` | Get the latest payment totals |
| `/api/orders` | `POST` | Create an order from the current cart |
| `/api/orders?expand=products` | `GET` | Load orders with product details |

See `ecommerce-backend/documentation.md` for endpoint details and response formats.

## Data Flow

1. The user interacts with a product, quantity selector, delivery option, or order button.
2. The relevant React handler sends an Axios request to the backend.
3. The backend processes the request and updates its data when necessary.
4. The frontend calls `loadCart()` when the cart needs to be refreshed.
5. React state updates and the UI re-renders.
6. The checkout effect fetches a new payment summary when `cart` changes.
7. After an order is created, `useNavigate()` takes the user to the Orders page.

## Running the Project

Open two terminals.

### 1. Start the backend

```bash
cd ecommerce-backend
npm install
npm run dev
```

Use Node.js 22 or later as specified in the backend README.

### 2. Start the frontend

```bash
cd ecommerce-project
npm install
npm run dev
```

If dependencies are already installed, you can skip `npm install`. Run each command from its respective project directory. Check the backend's `troubleshooting.md` if it does not start correctly.

## Key Takeaways

- `GET` reads data, `POST` creates data, `PUT` updates data, and `DELETE` removes data.
- Axios can send request bodies with `POST` and `PUT` requests.
- Refresh frontend state after a backend mutation so the UI reflects the latest data.
- A `useEffect` dependency array controls when an effect runs.
- The `[cart]` dependency allows checkout data, including the payment summary, to refresh after cart changes.
- `useNavigate()` supports navigation in response to an event or completed operation.
- Keep API request logic in the relevant component handlers and split the interface into smaller reusable components.

## Resources

- [SuperSimpleDev React Course](https://youtu.be/TtPXvEcE11E)
- [Lesson 8: Data Mutation, Finish the Ecommerce Project](https://www.youtube.com/watch?v=lYbJnPFzRRE)
- [Official React course repository](https://github.com/SuperSimpleDev/react-course)
- [Official Lesson 8 resources](https://github.com/SuperSimpleDev/react-course/blob/main/1-links.md)
- [Ecommerce backend API documentation](https://github.com/SuperSimpleDev/ecommerce-backend-ai/blob/main/documentation.md)
- [React `useEffect` documentation](https://react.dev/reference/react/useEffect)
- [React Router `useNavigate` documentation](https://reactrouter.com/api/hooks/useNavigate)
- [Axios documentation](https://axios-http.com/docs/intro)

## Progress

- [x] Learned the difference between data fetching and data mutation.
- [x] Used `POST` to add products to the cart and create orders.
- [x] Used `PUT` to update cart quantities and delivery options.
- [x] Used `DELETE` to remove cart items.
- [x] Refreshed the payment summary when cart state changes.
- [x] Navigated to the Orders page using `useNavigate`.
