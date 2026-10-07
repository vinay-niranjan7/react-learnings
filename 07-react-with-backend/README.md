# Day 7 - React with Backend & Data Fetching

This folder contains my Day 7 learning and practice of React.js.

In this lesson, the Ecommerce project was connected to a backend so that the React application can fetch and display real data instead of relying only on hard-coded data.

## Topics Learned

### 1. Backend

Learned that the backend manages application data and provides data to the frontend through APIs.

The Ecommerce project now has:

```text
React Frontend
      ↓
   API Requests
      ↓
Ecommerce Backend
      ↓
     Data
```

### 2. Set Up a Backend

Set up the Ecommerce backend for the project.

The backend is built using:

- Node.js
- Express
- Sequelize
- SQL database
- REST API endpoints

The backend provides data for:

- Products
- Cart items
- Delivery options
- Orders
- Payment summary

### 3. Data Fetching

Learned how a React application can request data from the backend and use the response to update the UI.

Example:

```jsx
const response = await axios.get('/api/products');
setProducts(response.data);
```

The data is stored in React state and then passed to components.

### 4. Axios

Learned that Axios provides an easier way to make HTTP requests to the backend.

Example:

```jsx
import axios from 'axios';

const response = await axios.get('/api/products');
```

Axios is used in the Ecommerce project for API requests.

### 5. Generate the UI Using Backend Data

The product data is fetched from the backend and used to generate the Ecommerce UI.

Example:

```jsx
const [products, setProducts] = useState([]);

useEffect(() => {
  const getHomeData = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  };

  getHomeData();
}, []);
```

The fetched products are then passed to the `ProductsGrid` component.

### 6. Separated the Application into Smaller Components

As the Ecommerce project became larger, it was separated into smaller reusable components.

Examples include:

```text
HomePage
├── Header
└── ProductsGrid

CheckoutPage
├── CheckoutHeader
├── OrderSummary
├── PaymentSummary
└── DeliveryOptions

OrdersPage
├── OrderHeader
├── OrderDetails
└── OrderProduct
```

This makes the application easier to understand, maintain, and reuse.

### 7. Async / Await

Learned how `async` and `await` make asynchronous JavaScript code easier to read and write.

Example:

```jsx
const fetchAppData = async () => {
  const response = await axios.get('/api/cart-items?expand=product');
  setCart(response.data);
};
```

Instead of handling asynchronous code through deeply nested callbacks, `async/await` allows it to be written in a style similar to normal synchronous code.

---

## Ecommerce Project

The Ecommerce project is now connected to a backend API.

### Frontend

The React frontend uses:

- React
- Vite
- React Router
- Axios
- Day.js
- CSS

### Backend

The backend uses:

- Node.js
- Express
- Sequelize
- SQL
- REST APIs

### Project Structure

```text
07-react-with-backend/
│
├── ecommerce-project/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── ecommerce-backend/
    ├── backend/
    ├── defaultData/
    ├── models/
    ├── routes/
    ├── images/
    ├── server.js
    ├── package.json
    └── documentation.md
```

---

## Backend API

The backend provides API endpoints for the Ecommerce application.

### Products

```text
GET /api/products
```

Returns the list of products.

Optional search:

```text
GET /api/products?search=...
```

### Delivery Options

```text
GET /api/delivery-options
```

Can also include estimated delivery information:

```text
GET /api/delivery-options?expand=estimatedDeliveryTime
```

### Cart

Get cart items:

```text
GET /api/cart-items
```

Add a product:

```text
POST /api/cart-items
```

Update a cart item:

```text
PUT /api/cart-items/:productId
```

Delete a cart item:

```text
DELETE /api/cart-items/:productId
```

### Orders

Get orders:

```text
GET /api/orders
```

Create an order:

```text
POST /api/orders
```

Get a specific order:

```text
GET /api/orders/:orderId
```

### Payment Summary

```text
GET /api/payment-summary
```

### Reset

```text
POST /api/reset
```

Resets the backend database to its default state.

---

## Data Flow

### Home Page

```text
HomePage
   ↓
axios.get('/api/products')
   ↓
Backend
   ↓
Product Data
   ↓
setProducts()
   ↓
ProductsGrid
```

### Checkout Page

```text
CheckoutPage
      ↓
Axios Requests
      ↓
Delivery Options
Payment Summary
      ↓
React State
      ↓
Checkout UI
```

### Orders Page

```text
OrdersPage
    ↓
axios.get('/api/orders?expand=products')
    ↓
Backend
    ↓
Orders Data
    ↓
setOrders()
    ↓
orders.map()
    ↓
Order Components
```

---

## Important Code Concepts

### Fetching Data with Axios

```jsx
const response = await axios.get('/api/products');
setProducts(response.data);
```

### Using `useEffect`

```jsx
useEffect(() => {
  const getHomeData = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  };

  getHomeData();
}, []);
```

### Rendering Backend Data

```jsx
{orders.map((order) => {
  return (
    <div key={order.id}>
      <OrderHeader order={order} />
      <OrderDetails order={order} />
    </div>
  );
})}
```

---

## Dependencies

The Ecommerce frontend uses:

```text
React       19.1.0
React DOM   19.1.0
React Router 7.8.0
Axios       1.8.4
Day.js      1.11.13
Vite        6.3.5
```

The official course resources specify Axios `1.8.4` and Day.js `1.11.13` for this lesson. citeturn0search0

---

## Running the Project

### Start the Backend

Open a terminal inside:

```text
ecommerce-backend/
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm run dev
```

### Start the React Frontend

Open another terminal inside:

```text
ecommerce-project/
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend can then communicate with the backend through the API routes.

---

## Key Takeaways

- The backend manages application data.
- A frontend can communicate with a backend using APIs.
- Data fetching allows React applications to display dynamic backend data.
- Axios can be used to make HTTP requests.
- `async/await` makes asynchronous code easier to read.
- API responses can be stored in React state.
- React state can be used to generate UI from backend data.
- Large React applications can be divided into smaller components.
- `.map()` can be used to generate UI from API data.
- Backend APIs can provide products, cart items, delivery options, orders, and payment summaries.

---

## Resources

This lesson is part of the SuperSimpleDev React Course.

- Course Repository: https://github.com/SuperSimpleDev/react-course
- Course Links: https://github.com/SuperSimpleDev/react-course/blob/main/1-links.md
- Exercise Solutions: https://github.com/SuperSimpleDev/react-course/tree/main/1-exercise-solutions
- Ecommerce Backend: https://github.com/supersimpledev/ecommerce-backend-ai
- Ecommerce Backend Documentation: https://github.com/SuperSimpleDev/ecommerce-backend-ai/blob/main/documentation.md
- Course: https://youtu.be/TtPXvEcE11E

The official course resources list the Ecommerce backend, its documentation, Axios version `1.8.4`, and Day.js version `1.11.13` for this lesson. citeturn0search0

---

## Learning Progress

```text
Day 1 → React Basics
Day 2 → Components & Props
Day 3 → State & Event Handlers
Day 4 → CSS & Hooks
Day 5 → Proper React Setup
Day 6 → React Router & Ecommerce
Day 7 → React with Backend & Data Fetching
```

This section connects the React Ecommerce frontend to a backend and introduces API requests, Axios, backend data, asynchronous code, and dynamic UI generation.
