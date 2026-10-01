# Day 4 - CSS with React & Hooks

This folder contains my Day 4 learning and practice of React.js.

## Topics Learned

### 1. CSS with React

Learned how to style React components using CSS.

CSS can be used to control:

- Colors
- Fonts
- Spacing
- Sizes
- Borders
- Layout
- Alignment

React components can use normal CSS classes just like HTML elements.

Example:

```jsx
<div className="chat-message">
  <p>Hello!</p>
</div>
```

The CSS class can then be defined in a CSS file:

```css
.chat-message {
  padding: 10px;
  margin: 10px;
}
```

### 2. Styled the Chatbot Project

Applied CSS styling to the Chatbot project to create a more complete user interface.

The chatbot UI was styled using:

- CSS classes
- Spacing
- Colors
- Borders
- Buttons
- Input styling
- Message layout

### 3. Flexbox

Learned how to use Flexbox to create flexible layouts.

Common Flexbox properties include:

```css
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
```

Flexbox makes it easier to arrange and align elements inside a container.

### 4. Ternary Operator

Learned how to use the ternary operator as an inline `if-else` statement in JSX.

Syntax:

```jsx
condition ? valueIfTrue : valueIfFalse
```

Example:

```jsx
{sender === 'user'
  ? <p>User message</p>
  : <p>Robot message</p>
}
```

This allows different JSX to be rendered depending on a condition.

### 5. React Hooks

Learned that hooks allow React features to be used inside components.

Examples of hooks learned in this lesson:

- `useEffect`
- `useRef`

Hooks allow components to use features such as side effects and references to HTML elements.

### 6. useEffect

`useEffect` is used to run code after a component is created or updated.

Example:

```jsx
React.useEffect(() => {
  console.log('Component updated');
}, []);
```

The dependency array controls when the effect runs.

An empty dependency array means the effect runs after the component is created.

### 7. useRef

`useRef` can be used to save a reference to an HTML element.

Example:

```jsx
const inputRef = React.useRef(null);

<input ref={inputRef} />
```

The reference can then be used to access the HTML element.

### 8. Auto-Scroll Feature

Used `useRef` and `useEffect` to create an auto-scroll feature for the Chatbot.

When a new message is added, the chatbot automatically scrolls to the latest message.

Conceptually:

```text
New message
     ↓
State updates
     ↓
Component updates
     ↓
useEffect runs
     ↓
useRef accesses the element
     ↓
Chat scrolls to the latest message
```

---

## Chatbot Project

This lesson continues the Chatbot project from the previous sections.

The Chatbot now includes:

- Styled user interface
- Flexbox layout
- Conditional message styling
- React hooks
- Auto-scroll
- Interactive input
- Chatbot responses

### Component Structure

```text
App
├── ChatInput
└── ChatMessages
    └── ChatMessage
```

### Main React Concepts Used

```text
Components
    ↓
Props
    ↓
State
    ↓
Events
    ↓
Hooks
    ↓
useEffect + useRef
```

---

## Lesson Code

The `lesson/` folder contains the code written while following the lesson demonstration.

The lesson demonstrates:

- CSS with React
- Flexbox
- Ternary operator
- React Hooks
- `useEffect`
- `useRef`
- DOM references
- Auto-scrolling

---

## Exercises

The `exercise/` folder contains my solutions to the exercises provided after the lesson.

The exercises are used to practice the concepts learned in the lesson, including:

- CSS styling
- Flexbox layouts
- Conditional rendering
- Ternary operators
- React hooks
- `useEffect`
- `useRef`
- DOM interaction

---

## Key Takeaways

- React components can be styled using CSS.
- `className` is used instead of `class` in JSX.
- Flexbox is useful for creating flexible layouts.
- The ternary operator can be used for inline conditional rendering.
- Hooks allow React features to be used inside components.
- `useEffect` runs code after a component is created or updated.
- `useRef` can store a reference to an HTML element.
- `useEffect` and `useRef` can work together to implement features such as auto-scrolling.
- React can interact with HTML elements through refs.

---

## Resources

This lesson is part of the SuperSimpleDev React Course.

- Course Repository: https://github.com/SuperSimpleDev/react-course
- Course Links: https://github.com/SuperSimpleDev/react-course/blob/main/1-links.md
- Exercise Solutions: https://github.com/SuperSimpleDev/react-course/tree/main/1-exercise-solutions
- Course: https://youtu.be/TtPXvEcE11E

The official course repository contains the lesson resources, exercise solutions, course links, and troubleshooting material.

---

## Learning Progress

```text
Day 1 → React Basics
Day 2 → Components & Props
Day 3 → State & Event Handlers
Day 4 → CSS & Hooks
```

This section builds on the interactive Chatbot from the previous lessons and introduces CSS, Flexbox, React Hooks, `useEffect`, and `useRef` to make the application more polished and interactive.
