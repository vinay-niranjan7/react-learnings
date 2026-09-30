# Day 3 - State & Event Handlers

This folder contains my Day 3 learning and practice of React.js.

## Topics Learned

### 1. Saving Data Using Arrays and Objects

Learned how to store application data using JavaScript arrays and objects.

Example:

```javascript
const chatMessages = [
  {
    message: 'Hello Chatbot',
    sender: 'user',
    id: '1'
  },
  {
    message: 'How can I help you?',
    sender: 'robot',
    id: '2'
  }
];
```

Arrays and objects can be used to represent and manage data in a React application.

### 2. Generating HTML Using `.map()` and `key`

Learned how to generate multiple React elements from an array using `.map()`.

Example:

```jsx
{chatMessages.map((chatMessage) => {
  return (
    <ChatMessage
      message={chatMessage.message}
      sender={chatMessage.sender}
      key={chatMessage.id}
    />
  );
})}
```

The `key` prop gives each generated element a unique identity.

### 3. Making the UI Interactive

Learned how to respond to user interactions using event handlers such as:

- `onClick`
- `onChange`

Example:

```jsx
<button onClick={increaseCount}>
  Click
</button>
```

and:

```jsx
<input onChange={saveInputText} />
```

### 4. State

State is data that can change over time and is connected to the UI.

React's `useState()` hook is used to create and update state.

Example:

```jsx
const [count, setCount] = React.useState(0);
```

Here:

- `count` stores the current state.
- `setCount` updates the state.

When state changes, React updates the related HTML automatically.

### 5. Updater Function

The state updater function is used to update state and therefore update the UI.

Example:

```jsx
setCount(count + 1);
```

After the state changes, React re-renders the component with the updated value.

### 6. Array Destructuring

Learned array destructuring while using `useState()`.

Example:

```javascript
const [count, setCount] = React.useState(0);
```

This extracts the two values returned by `useState()`:

```text
count     → current state
setCount  → state updater function
```

### 7. Lifting State Up

Learned that state can be moved to a common parent component so that multiple child components can share the same state.

Example:

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Component
        count={count}
        setCount={setCount}
      />

      <Component
        count={count}
        setCount={setCount}
      />
    </>
  );
}
```

Both child components now use the same `count` state.

### 8. Making `ChatInput` Interactive

The `ChatInput` component was made interactive using state.

It can:

- Store input text
- Update the input using `onChange`
- Send a message using `onClick`
- Clear the input after sending

Example:

```jsx
const [inputText, setInputText] = React.useState('');

function saveInputText(event) {
  setInputText(event.target.value);
}
```

### 9. Getting Responses from the Chatbot

The chatbot was connected to the input and can generate a response when a message is sent.

Example:

```javascript
const response = Chatbot.getResponse(inputText);
```

The user message and chatbot response are then added to the `chatMessages` array.

---

## Chatbot Project

The lesson continues the Chatbot project from the previous section.

The application now uses state to store and update chat messages.

### Component Structure

```text
App
├── ChatInput
└── ChatMessages
    └── ChatMessage
```

### Data Flow

```text
App
│
├── chatMessages
├── setChatMessages
│
├── ChatInput
│   └── Sends new messages
│
└── ChatMessages
    └── Displays messages
        └── ChatMessage
```

The state is stored in the `App` component and shared with child components using props.

---

## Lesson Code

The `lesson/` folder contains the code written while following the lesson demonstration.

```text
lesson/
├── chatbot.html
├── robot.png
└── user.png
```

The lesson demonstrates:

- Arrays and objects
- `.map()`
- `key` prop
- `onClick`
- `onChange`
- `useState`
- State updates
- Array destructuring
- Lifting state up
- Sharing state through props
- Interactive inputs
- Chatbot responses

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

### Exercise Practice

| Exercise | Main Concept |
|---|---|
| 01 | Event handling with `onClick` |
| 02 | `useState()` and updating state |
| 03 | Displaying state and conditional text |
| 04 | Using state in multiple components |
| 05 | Lifting state up and sharing state through props |
| 06 | Sharing state and creating a reset component |
| 07 | Controlled input using `useState` and `onChange` |
| 08 | Controlled input with Reset and Example buttons |

### Exercise 08

The final exercise makes the input interactive with:

- `onChange`
- `useState`
- Reset button
- Example button
- Displaying the current input

Example:

```jsx
function resetText() {
  setInputText('');
}

function exampleText() {
  setInputText('Vinay');
}
```

---

## Key Takeaways

- Arrays and objects can be used to store application data.
- `.map()` can generate multiple React elements.
- Each mapped element should have a unique `key`.
- `onClick` handles click events.
- `onChange` handles input changes.
- State represents data that changes over time and is connected to the UI.
- `useState()` creates state and provides a state updater function.
- Updating state causes React to update the UI.
- Array destructuring is commonly used with `useState()`.
- State can be lifted up to a parent component.
- Props can be used to share state and updater functions with child components.
- Controlled inputs keep the input value connected to React state.
- The Chatbot can store messages and generate responses dynamically.

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
```

This section builds on the components and props learned previously and introduces state and event handling to make React applications interactive.
