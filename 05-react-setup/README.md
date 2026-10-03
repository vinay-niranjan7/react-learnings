# Day 5 - Proper React Setup

This folder contains my Day 5 learning and practice of React.js using a proper development setup with Vite and npm.

## Topics Learned

### 1. Proper React Setup

Learned how to create a proper React development environment using:

- Command Line
- Node.js
- npm
- Vite
- React

Instead of loading React through CDN links in an HTML file, the project is now created using a modern React development setup.

### 2. Command Line

Learned how the command line can be used to give commands to the computer and manage a development project.

Examples include:

```bash
npm create vite@latest
npm install
npm run dev
```

### 3. NPM

NPM (Node Package Manager) is used to download and manage external libraries and packages.

For example:

```bash
npm install
```

installs the dependencies required by the project.

Packages are defined in:

```text
package.json
```

### 4. create-vite

Learned how the `create-vite` package helps create a proper React project setup.

The generated project includes files and folders such as:

```text
project/
├── src/
├── public/
├── package.json
├── vite.config.js
└── index.html
```

### 5. Moved the Chatbot Project to the New React Setup

The Chatbot project from the previous lessons was moved from the basic CDN-based setup into a proper Vite React project.

The project now uses:

- React
- ReactDOM
- Vite
- npm
- JavaScript modules
- JSX
- CSS files

### 6. ESLint

Learned that ESLint helps identify potential problems and mistakes in JavaScript code.

The project includes:

```text
eslint.config.js
```

ESLint can be run using:

```bash
npm run lint
```

### 7. JavaScript Modules

Learned how JavaScript modules allow code to be separated into different files using `import` and `export`.

Example:

```jsx
import { ChatInput } from './components/ChatInput';
```

and:

```jsx
export function ChatInput() {
  // component
}
```

This makes the project easier to organize and maintain.

### 8. Separate Components into `.jsx` and `.css` Files

Each React component was separated into its own JSX and CSS files.

Example:

```text
src/
├── App.jsx
├── App.css
│
└── components/
    ├── ChatInput.jsx
    ├── ChatInput.css
    ├── ChatMessage.jsx
    ├── ChatMessage.css
    ├── ChatMessages.jsx
    └── ChatMessages.css
```

This keeps component logic and styling organized.

---

## Chatbot Project

The Chatbot project from the previous lessons was migrated into the new Vite React setup.

### Project Structure

```text
chatbot-project/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   │
│   └── components/
│       ├── ChatInput.jsx
│       ├── ChatInput.css
│       ├── ChatMessage.jsx
│       ├── ChatMessage.css
│       ├── ChatMessages.jsx
│       └── ChatMessages.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

### Component Structure

```text
App
├── ChatMessages
│   └── ChatMessage
│
└── ChatInput
```

The Chatbot continues to use concepts learned in previous lessons:

- Components
- Props
- State
- Event handlers
- Hooks
- CSS
- Chatbot responses

---

## Important Commands

### Create a Vite React Project

```bash
npm create vite@latest
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Run ESLint

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Key Takeaways

- A proper React project can be created using Vite.
- The command line is used to manage and run development projects.
- npm manages external packages and project dependencies.
- `create-vite` helps create the initial React project structure.
- Vite provides a modern development environment for React.
- ESLint helps identify problems in JavaScript code.
- JavaScript modules allow code to be split across multiple files.
- `import` and `export` are used to share code between modules.
- React components can be separated into individual `.jsx` files.
- Component styling can be separated into individual `.css` files.
- `package.json` contains project dependencies and scripts.
- `node_modules` contains installed packages and should not be pushed to GitHub.

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
```

This section moves the Chatbot project from a basic CDN-based React setup to a proper Vite-based React development environment with npm, ESLint, JavaScript modules, separate components, and separate CSS files.
