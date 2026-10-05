# Day 6 - React Router & Ecommerce

This folder contains my Day 6 learning and practice of React.js.

In this lesson, I started building an Ecommerce project using React and Vite and learned how to create multiple pages and navigate between them using React Router.

## Topics Learned

### 1. Started the Ecommerce Project

Started building an Ecommerce website using:

- React
- Vite
- JavaScript
- JSX
- CSS

The project is built using the proper React setup learned in the previous lesson.

### 2. Routing

Learned how routing allows a React application to have multiple pages without creating separate HTML files for every page.

The project uses React Router.

Main routing concepts:

- `BrowserRouter`
- `Routes`
- `Route`
- `Link`

Example:

```jsx
<Routes>
  <Route index element={<HomePage />} />
  <Route path="checkout" element={<CheckoutPage />} />
  <Route path="orders" element={<OrdersPage />} />
  <Route path="tracking" element={<Tracking />} />
</Routes>
```

### 3. Created Multiple Pages

Created the following pages for the Ecommerce project:

- `HomePage`
- `CheckoutPage`
- `OrdersPage`
- `Tracking`

The routes are:

```text
/           → HomePage
/checkout   → CheckoutPage
/orders     → OrdersPage
/tracking   → Tracking
```

### 4. Updated Links to Work with Routing

Learned how to use React Router's `Link` component for navigation.

Example:

```jsx
<Link to="/orders">
  Orders
</Link>
```

This allows navigation between pages within the React application.

### 5. Separated the Header into a Component

The Ecommerce header was separated into its own reusable `Header` component.

The Header contains:

- Website logo
- Search bar
- Search button
- Orders link
- Cart link
- Cart quantity

This makes the Header reusable across different pages.

---

## Ecommerce Project

This lesson starts the Ecommerce project and introduces routing and page-based organization in React.

### Project Structure

```text
ecommerce-project/
│
├── public/
│   └── images/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   └── pages/
│       ├── HomePage.jsx
│       ├── HomePage.css
│       ├── CheckoutPage.jsx
│       ├── CheckoutPage.css
│       ├── OrdersPage.jsx
│       ├── OrdersPage.css
│       ├── Tracking.jsx
│       └── Tracking.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

## React Router Setup

The application uses `BrowserRouter`:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

The `App` component contains the routes:

```jsx
<Routes>
  <Route index element={<HomePage />} />
  <Route path="checkout" element={<CheckoutPage />} />
  <Route path="orders" element={<OrdersPage />} />
  <Route path="tracking" element={<Tracking />} />
</Routes>
```

This connects URLs to React components.

## Navigation

The Header component uses `Link` for navigation:

```jsx
<Link to="/" className="header-link">
  Home
</Link>

<Link to="/orders" className="header-link">
  Orders
</Link>

<Link to="/checkout" className="header-link">
  Cart
</Link>
```

This allows the user to move between pages without manually creating separate HTML files.

---

## Technologies

- React
- React Router
- Vite
- JavaScript
- JSX
- CSS
- npm

---

## Important Commands

Start the development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Key Takeaways

- React Router allows a React application to have multiple pages.
- `BrowserRouter` enables routing in the application.
- `Routes` contains the application's routes.
- `Route` connects a URL path with a React component.
- `Link` provides navigation between routes.
- React pages can be organized into a `pages` folder.
- Common UI elements can be separated into reusable components.
- The Header was separated into its own component.
- The Ecommerce project uses React Router for page navigation.
- React applications can provide multiple views while remaining a single-page application.

---

## Resources

This lesson is part of the SuperSimpleDev React Course.

- Course Repository: https://github.com/SuperSimpleDev/react-course
- Course Links: https://github.com/SuperSimpleDev/react-course/blob/main/1-links.md
- Exercise Solutions: https://github.com/SuperSimpleDev/react-course/tree/main/1-exercise-solutions
- Course: https://youtu.be/TtPXvEcE11E

---

## Learning Progress

```text
Day 1 → React Basics
Day 2 → Components & Props
Day 3 → State & Event Handlers
Day 4 → CSS & Hooks
Day 5 → Proper React Setup
Day 6 → React Router & Ecommerce
```

This section starts the Ecommerce project and introduces React Router, multiple pages, navigation, and reusable components.
