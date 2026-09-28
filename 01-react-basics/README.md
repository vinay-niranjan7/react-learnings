# 1 - React Basics

This folder contains my Day 1 learning and practice of React.js.

## Topics Learned

### 1. What is React?

- React is a JavaScript library used to build user interfaces.
- It helps create websites and web applications more easily.
- React can be loaded as an external library in a basic HTML file.

### 2. Loading React

Learned how to load React using external CDN links.

Main libraries:

- React
- ReactDOM
- Babel

### 3. Setting Up React

Learned the basic setup required to use React in an HTML file.

Also learned how to use:

```javascript
ReactDOM.createRoot()
```

and:

```javascript
.render()
```

to display React elements on a webpage.

### 4. HTML and JavaScript Review

Reviewed basic:

- HTML elements
- HTML structure
- JavaScript variables
- Functions
- Objects
- DOM concepts
- JavaScript expressions

### 5. JSX

Learned that JSX allows us to write HTML-like syntax inside JavaScript.

Example:

```jsx
const paragraph = <p>Hello React!</p>;
```

JSX makes it easier to create UI elements using React.

### 6. Creating Elements with JSX

Learned how to create HTML elements directly using JSX.

Example:

```jsx
const div = (
  <div>
    <p>Hello World</p>
    <button>Click Me</button>
  </div>
);
```

### 7. Inserting JavaScript Values into JSX

JavaScript values can be inserted into JSX using curly braces `{}`.

Example:

```jsx
const name = 'Vinay';

const paragraph = <p>Hello {name}</p>;
```

## React Rendering

Basic React rendering:

```javascript
const container = document.querySelector('.js-container');

ReactDOM.createRoot(container).render(
  <p>Hello React!</p>
);
```

React renders the JSX element inside the selected HTML container.

## Practice

The `exercise/` folder contains the exercises completed after learning the concepts.

```text
exercise/
├── 01_exercise.html
├── 02_exercise.html
├── 03_exercise.html
├── 04_exercise.html
├── 05_exercise.html
├── 06_exercise.html
├── 07_exercise.html
├── 08_exercise.html
└── 09_exercise.html
```

## Lesson Code

The `lesson/` folder contains the code written while following the concepts demonstrated in the course.

```text
lesson/
└── index.html
```

## Key Takeaways

- React is a JavaScript library for building user interfaces.
- React can be loaded using external libraries.
- `ReactDOM.createRoot()` creates a React root.
- `.render()` displays React elements.
- JSX allows HTML-like syntax inside JavaScript.
- JavaScript values can be inserted into JSX using `{}`.
- React makes it easier to create and update UI elements.

## Course

This lesson is part of my React learning journey using the SuperSimpleDev React course.

The purpose of this repository is to document my learning, lesson implementations, and exercise solutions while learning React.js.
