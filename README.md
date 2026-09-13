# 🚀 DevStack

## 📌 About The Project

DevStack is a React-based application where users can explore different technologies and add their favorite technologies to their personal stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React-Toastify
* JSON

## ✨ Features

* 📚 Browse different technologies
* ➕ Add technologies to your personal stack
* 🗑️ Remove technologies from your stack
* 🔔 Toast notifications for add, remove, and duplicate actions



# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to write and understand.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data that is managed inside a component and can change over time.

## 3. What does the useState hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a component. I used it to manage the technologies added to the user's stack.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to load the JSON data when the application starts.

## 5. Why does every item in a .map() list need a unique key prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update the list when something changes.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different content based on a condition.

I used it to show a message when the stack is empty:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map((item) => <StackItem key={item.id} item={item} />)
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

```jsx
<Child technology={technology} />
```

A child can send something back to the parent by calling a function that the parent passes through props.

```jsx
<Child onRemove={handleRemove} />
```

The child can call `onRemove()` when an action happens.
