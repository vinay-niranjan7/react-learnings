# Day 2 - Components & Props

This folder contains my Day 2 learning and practice of React.js.

## Topics Learned

### 1. Components

- A component is a piece of a website's user interface.
- Components help break a webpage into smaller, reusable parts.
- React components are usually created as JavaScript functions.
- Component names should start with a capital letter.

Example:

```jsx
function ChatInput() {
  return (
    <>
      <input placeholder="Send a message to chatbot" />
      <button>Send</button>
    </>
  );
}
```

### 2. Components Create Our Own HTML Elements

React components can be used like custom HTML elements.

Example:

```jsx
<ChatInput />
```

This allows us to reuse the same component wherever it is needed.

### 3. Started the Chatbot Project

Started building the Chatbot project using React components.

The initial chatbot contains:

- Chat input
- Send button
- User messages
- Robot messages

### 4. Splitting the Chatbot into Components

The chatbot was divided into smaller components:

```text
App
├── ChatInput
└── ChatMessage
```

This makes the code easier to understand, maintain, and reuse.

### 5. Props

Props allow us to pass data from a parent component to a child component.

Example:

```jsx
<ChatMessage
  message="Hello Chatbot"
  sender="user"
/>
```

The component can receive these values:

```jsx
function ChatMessage({ message, sender }) {
  return (
    <div>
      {message}
    </div>
  );
}
```

Props make components reusable because the same component can display different data.

### 6. Destructuring

Learned how to destructure props.

Instead of:

```jsx
function ChatMessage(props) {
  return <p>{props.message}</p>;
}
```

We can use:

```jsx
function ChatMessage({ message, sender }) {
  return <p>{message}</p>;
}
```

### 7. Guard Operator (`&&`)

Learned how to conditionally render JSX using the `&&` operator.

Example:

```jsx
{sender === 'robot' && <img src="robot.png" width="50" />}
```

The image is rendered only when the condition is true.

### 8. Code Cleanup

Refactored the code to:

- Create reusable components
- Remove unnecessary code
- Improve readability
- Use props instead of duplicated code
- Keep components focused on specific UI sections

### 9. App Component

Created an `App` component to combine the smaller components.

Example:

```jsx
function App() {
  return (
    <>
      <ChatInput />

      <ChatMessage
        message="Hello Chatbot"
        sender="user"
      />

      <ChatMessage
        message="How can I help you?"
        sender="robot"
      />
    </>
  );
}
```

The `App` component acts as the main/root component for this lesson.

---

## Lesson Code

The `lesson/` folder contains the code written while following the lesson demonstration.

```text
lesson/
├── chatbot.html
├── robot.png
└── user.png
```

The chatbot demonstrates:

- Functional components
- Component composition
- Props
- Props destructuring
- Conditional rendering
- Guard operator (`&&`)
- Reusable components

---

## Exercises

The `exercises/` folder contains my solutions to the exercises provided after the lesson.

```text
exercises/
├── 01-exercise.html
├── 02-exercise.html
├── 03-exercise.html
├── 04-exercise.html
├── 05-exercise.html
├── 06-exercise.html
├── 07-exercise.html
└── 08-exercise.html
```

### Exercise Concepts

| Exercise | Main Concept |
|---|---|
| 01 | Creating an `App` component |
| 02 | Returning multiple JSX elements |
| 03 | Creating a login form UI |
| 04 | Creating and using a `LoginForm` component |
| 05 | Creating a product UI |
| 06 | Creating reusable `ProductDetails` component with props |
| 07 | Optional discount using conditional rendering |
| 08 | Conditional rendering with `&&` and `!` |

---

## Key Takeaways

- Components are reusable pieces of a user interface.
- Components can be used like custom HTML elements.
- A component can be composed of other components.
- Props allow data to be passed from parent to child components.
- Props make components reusable.
- Props can be destructured directly in function parameters.
- The `&&` operator can be used for conditional rendering.
- The `App` component can combine multiple smaller components.
- Breaking a UI into components makes the code easier to maintain.

---

## Resources

This lesson is part of the SuperSimpleDev React Course.

- Course Repository: https://github.com/SuperSimpleDev/react-course
- Course Links: https://github.com/SuperSimpleDev/react-course/blob/main/1-links.md
- Chatbot Project: https://supersimple.dev/projects/chatbot
- React Course: https://youtu.be/TtPXvEcE11E

The official course repository provides exercise solutions, copies of the lesson code, lesson links, and troubleshooting resources.
