# Day-01

In the evolving landscape of web development, ReactJS and Next.js stand out as powerful tools that developers leverage to build dynamic, efficient, and user-friendly web applications. Understanding these technologies is crucial for developers aiming to stay ahead of the curve. This article delves into the basics, features, and benefits of ReactJS and Next.js, providing a comprehensive overview for both beginners and experienced developers.


## What is ReactJS?
ReactJS, commonly referred to as React, is an open-source JavaScript library developed by Facebook. It is primarily used for building user interfaces, particularly single-page applications where a seamless user experience is crucial.


## Key Features of ReactJS
Component-Based Architecture: React promotes the development of reusable components, allowing developers to build complex UIs by combining simple components.
### Virtual DOM:
React employs a virtual DOM to enhance performance. It updates only the parts of the real DOM that have changed, making the rendering process more efficient.
### One-Way Data Binding:
Data flows in one direction, making the application easier to debug and more predictable.
### JSX Syntax:
React uses JSX, a syntax extension that allows writing HTML directly within JavaScript, making the code more readable and easier to write.


## Benefits of Using ReactJS
### Performance:
The virtual DOM significantly boosts application performance.
### Reusability:
Components can be reused across different parts of the application, reducing development time.
### Community Support:
With a large community and extensive documentation, finding solutions to problems is easier.
### SEO-Friendly:
Although React is a client-side library, it can be configured to be SEO-friendly with server-side rendering.


## What is Next.js?
Next.js is a React framework developed by Vercel that enables server-side rendering and static site generation. It extends the capabilities of React, making it more powerful and versatile for building web applications.


## Key Features of Next.js
### Server-Side Rendering (SSR):
Next.js pre-renders pages on the server at each request, improving performance and SEO.
### Static Site Generation (SSG): 
It allows generating static HTML pages at build time, which can be served efficiently by a CDN.
### File-Based Routing: 
Next.js uses a file-based routing mechanism, simplifying the creation of routes in an application.
### API Routes: 
Developers can create API endpoints within the application, streamlining the development process.
### Automatic Code Splitting: 
This feature ensures that only the necessary code is loaded for each page, enhancing performance.


## Benefits of Using Next.js
### Improved Performance: 
SSR and SSG enhance the performance and load times of web applications.
### Better SEO: 
Pre-rendering ensures that search engines can easily crawl and index the content.
### Simplified Routing: 
The file-based routing system makes it easier to manage and navigate routes.
### Integrated API Routes: 
Allows for creating serverless functions directly within the application.
### Enhanced Developer Experience: 
With built-in features and optimizations, Next.js provides a smoother development workflow.


## Comparing ReactJS and Next.js
While ReactJS and Next.js both leverage the power of React, they serve different purposes and excel in different areas.
Use Case: ReactJS is ideal for building dynamic UIs and single-page applications, whereas Next.js is perfect for applications that require SSR, SSG, or a mix of both.
### Performance: 
Next.js offers out-of-the-box performance optimizations with SSR and SSG, which are not inherently available in ReactJS.
### SEO: 
Next.js provides better SEO capabilities due to server-side rendering and static site generation.
### Routing: 
Next.js has a built-in file-based routing system, while ReactJS requires additional libraries like React Router for routing.


## Conclusion
ReactJS and Next.js are indispensable tools in modern web development. ReactJS is a robust library for building dynamic user interfaces, while Next.js enhances React by providing server-side rendering, static site generation, and other advanced features. Choosing between the two depends on the specific needs of your project. For dynamic, single-page applications, ReactJS is a perfect choice. For applications where performance, SEO, and scalability are critical, Next.js stands out as the superior framework.


By understanding the strengths and capabilities of both ReactJS and Next.js, developers can make informed decisions and build high-quality web applications that meet the demands of today's digital landscape.

### Facebook developed:
    - ReactJS for website.
    - React Native for apps.
    - GraphQL
### Google developed:
    - Angular for websites
    - Go lang for backend    


# Day-02

> **Setting up ReactJS for your project is straightforward and requires just a few steps**.

**Let's dive into the process**


### Step 1: Prerequisites

Before you start, ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from nodejs.org.


### Step 2: Create a New React Project

You can initialize a new React project using Create React App, a tool built by the React team to set up a new React project with a single command. Open your terminal and run the following command:


`npx create-react-app my-react-app`


> Replace my-react-app with your preferred project name.


### Step 3: Navigate to Your Project

Once the project is created, navigate into your project directory:


`cd my-react-app`


### Step 4: Run the Development Server

You can start the development server by running the following command:

`npm start`

> To run react we need a server, so with the help of NodeJS we create a server in our computer which runs on localhost (127.0.0.1). NodeJS compiles our react-application.

## 🔹 What is **npx**?

**npx** = **Node Package eXecute**

It comes with **npm (v5.2+)** and is used to **run Node packages without installing them globally**.

### ✅ Why npx exists

Before npx:

```bash
npm install -g create-react-app
create-react-app myApp
```

Problems:

* Global version conflicts
* Manual updates
* Polluted global space

### ✅ With npx

```bash
npx create-react-app myApp
```

What happens:

* Downloads the package **temporarily**
* Runs it
* Deletes it after execution (if not needed again)

### 🔥 Key benefits

* No global installs
* Always uses **latest version**
* Cleaner system

### 🧠 Interview one-liner

> **npx is used to execute Node packages directly without installing them globally.**

---

## 🔹 What is **`package.json`** in a React app?

`package.json` is the **heart of your React project** 💓

It stores:

* Project metadata
* Dependencies
* Scripts
* Configurations

### 📄 Example

```json
{
  "name": "my-react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

### 🔑 Important sections

#### 1️⃣ `dependencies`

Libraries required at **runtime**

```json
"react", "react-dom", "axios"
```

#### 2️⃣ `devDependencies`

Libraries needed only for **development**

```json
"eslint", "webpack", "jest"
```

#### 3️⃣ `scripts`

Commands you run:

```bash
npm start
npm run build
npm test
```

### 🧠 Interview one-liner

> **package.json defines project info, dependencies, and runnable scripts.**

---

## 🔹 What is **`package-lock.json`** in a React app?

`package-lock.json` is the **exact dependency snapshot** 📸

### ❓ Why do we need it?

Different machines may install **different versions** of the same package if versions are flexible (`^`, `~`).

### 📌 What it does

* Locks **exact versions**
* Ensures **same node_modules** on all machines
* Improves install speed
* Prevents “works on my machine” bugs 😅

### ⚠️ Important rule

✅ **Commit `package-lock.json` to Git**
❌ **Do not edit it manually**

### 🧠 Interview one-liner

> **package-lock.json ensures consistent dependency versions across environments.**

---

## 🔹 What is the **`src` folder** in a React app?

`src` = **Source code of your React application** 🧠

Everything that makes your app **work & render** lives here.

### 📂 Common structure

```
src/
├── App.js
├── index.js
├── components/
├── pages/
├── hooks/
├── services/
├── styles/
└── assets/
```

### 🔑 Important files

#### `index.js`

```js
ReactDOM.createRoot(document.getElementById("root"))
  .render(<App />);
```

➡ Entry point of React

#### `App.js`

```js
function App() {
  return <h1>Hello React</h1>;
}
```

➡ Root component

### 🧠 Rules of `src`

* Only files inside `src` can be imported
* Webpack/Babel compile this folder
* Clean separation of logic & UI

### 🧠 Interview one-liner

> **The src folder contains the complete source code of the React application.**

---

## 🔥 Quick Comparison (Interview Gold)

| File                | Purpose                             |
| ------------------- | ----------------------------------- |
| `npx`               | Run packages without global install |
| `package.json`      | Project config & dependencies       |
| `package-lock.json` | Exact dependency versions           |
| `src/`              | Application source code             |





> We never **share** or **push** **node_modules** folder.


# Day-03
### React JSX: JavaScript XML
JSX, or JavaScript XML, is an extension to JavaScript syntax used with React. It allows you to write HTML-like code within JavaScript files, making it easier to describe the structure of UI components. JSX elements resemble HTML elements, **but they are actually JavaScript objects**.

### Key Features of JSX:
* **Embedding Expressions:** You can embed JavaScript expressions within **curly braces** `{}` directly inside JSX elements.

* **Attributes:** JSX supports HTML-like attributes to configure elements, such as className instead of class.

* **Self-Closing Tags:** JSX allows self-closing tags for elements without children, similar to HTML.

* **Components:** JSX enables the use of components, which are reusable and encapsulated pieces of UI.


## Components in React
Components are the building blocks of React applications. They allow you to split the UI into independent, reusable pieces. React components can be function components or class components.

### Function Components:
Function components are JavaScript functions that return JSX elements. They are simpler and more concise compared to class components. Function components are often used for presentational or stateless components.

### Class Components:
Class components are JavaScript classes that extend the React.Component class. They have additional features like state and lifecycle methods. Class components are typically used when you need to manage state or use lifecycle methods.

## Props:
Props, short for properties, are read-only attributes passed to components. They allow you to pass data from parent to child components. Props are immutable and cannot be modified by the child component.

## State:
State is a built-in feature in React components that allows components to manage their internal data. State is mutable and can be updated using the setState method. Class components can have state, whereas function components can use the useState hook to manage state.

## Conclusion
Understanding React JSX and components is fundamental to building React applications. JSX provides a more expressive way to describe UI elements, while components enable code reusability and maintainability. By grasping these concepts, you'll be well-equipped to create dynamic and interactive user interfaces with ReactJS.


## 🔤 Letter / Naming Conventions

* **lowercase** → `username`
  👉 Mostly used in URLs, emails, CSS classes (sometimes)

* **UPPERCASE** → `USERNAME`
  👉 Used for **constants**, environment variables (`API_KEY`)

* **camelCase** → `userName`
  👉 Most common in **JavaScript variables & functions**

* **PascalCase** → `UserName`
  👉 Used for **Classes, Components (React), Constructors**

* **snake_case** → `user_name`
  👉 Common in **databases, Python, backend APIs**

---

## 🧠 Quick Interview Tip

| Usage            | Convention |
| ---------------- | ---------- |
| JS variables     | camelCase  |
| JS functions     | camelCase  |
| JS classes       | PascalCase |
| React components | PascalCase |
| Constants        | UPPERCASE  |
| DB fields        | snake_case |




## 🔷 What is React Fragment?

A **React Fragment** lets you **group multiple elements** without adding an extra node to the DOM.

In short:

> 👉 It’s an invisible wrapper.


### ❌ Problem (Beginner Level)

React components **must return a single parent element**.

#### ❌ Invalid JSX

```jsx
function App() {
  return (
    <h1>Hello</h1>
    <p>Welcome</p>
  );
}
```

👆 This will throw an error.



### ✅ Solution 1: Using `<div>` (Not Ideal)

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}
```

⚠️ Problem:

* Adds **unnecessary `<div>`** to the DOM
* Breaks CSS layouts (flex, grid)
* Makes DOM bulky



### ✅ Solution 2: React Fragment (Best)

```jsx
function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome</p>
    </React.Fragment>
  );
}
```

✔ No extra DOM node
✔ Clean HTML
✔ Better performance

---

### ✨ Short Syntax (Most Common)

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
```

> ⚠️ Short syntax **cannot accept props**



## 🔷 Why React Fragment is Used?

#### ✅ 1. Avoid Extra DOM Elements

No unwanted `<div>` wrappers.

#### ✅ 2. Fix CSS & Layout Issues

Fragments don’t interfere with:

* Flexbox
* Grid
* Table layouts

#### ✅ 3. Cleaner & Readable Code

Your JSX stays minimal and semantic.



## 🔷 Common Real-World Examples

#### 📌 Lists (`map`)

```jsx
users.map(user => (
  <React.Fragment key={user.id}>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </React.Fragment>
))
```

⚠️ Important:

* **Fragment needs `key`** in lists
* Short syntax `<>` ❌ can’t take `key`



#### 📌 Table Rows (Very Important Interview Question)

❌ Wrong

```jsx
<table>
  <tr>
    <div>Invalid</div>
  </tr>
</table>
```

✅ Correct with Fragment

```jsx
<table>
  <tbody>
    <tr>
      <>
        <td>Shiv</td>
        <td>React</td>
      </>
    </tr>
  </tbody>
</table>
```



## 🔷 Fragment vs Div (Interview Favorite)

| Fragment           | div             |
| ------------------ | --------------- |
| No DOM node        | Adds DOM node   |
| Cleaner HTML       | Extra nesting   |
| Better performance | Slightly slower |
| No styling         | Can style       |


## 🔷 Advanced Level

### 1️⃣ Fragment with Keys

```jsx
<React.Fragment key={id}>
  <ComponentA />
  <ComponentB />
</React.Fragment>
```

### 2️⃣ Performance Optimization

* Fewer DOM nodes
* Faster rendering
* Better reconciliation



### 3️⃣ Semantic HTML

Fragments keep HTML meaningful:

```html
<ul>
  <li>Item</li>
</ul>
```

instead of:

```html
<ul>
  <div>
    <li>Item</li>
  </div>
</ul>
```


### 🔥 Common Mistakes

- ❌ Trying to style Fragment
- ❌ Using short syntax with `key`
- ❌ Forgetting Fragment in lists



Perfect topic 😄 JSX is **core React knowledge** and interviewers *love* going deep on it.
Let’s go **Beginner → Intermediate → Advanced → Interview** in one clean flow 🚀



## 🔷 What is JSX?

**JSX (JavaScript XML)** is a **syntax extension for JavaScript** used in React to write UI code that looks like HTML.

#### Example:

```jsx
const element = <h1>Hello World</h1>;
```

👉 This is **JSX**, not HTML.


### 🤔 Why JSX Exists? (Beginner)

Without JSX, React looks like this:

```js
const element = React.createElement(
  "h1",
  null,
  "Hello World"
);
```

With JSX:

```jsx
const element = <h1>Hello World</h1>;
```

- ✔ Easier to read
- ✔ Easier to write
- ✔ Less error-prone



## 🔷 Is JSX Mandatory?

- ❌ NO
- ✔ React works **without JSX**

But:

> JSX makes React **developer-friendly**


## 🔷 How JSX Works (Behind the Scenes)

- JSX is **not understood by browsers**.
- It gets converted by **Babel** into JS:

  ```jsx
  <h1>Hello</h1>
  ```

- ⬇️ becomes

  ```js
  React.createElement("h1", null, "Hello");
  ```

📌 That’s why:

* JSX must be compiled
* You need Babel / Vite / CRA


## 🔷 JSX Rules (Very Important)

#### 1️⃣ Must return a single parent

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

#### 2️⃣ `class` ❌ → `className` ✅

```jsx
<div className="box"></div>
```

---

#### 3️⃣ `for` ❌ → `htmlFor` ✅

```jsx
<label htmlFor="email"></label>
```

---

#### 4️⃣ JSX expressions use `{ }`

```jsx
<h1>{name}</h1>
<p>{2 + 2}</p>
```

- ✔ expressions
- ❌ statements (`if`, `for`)

---

## 🔷 Conditional Rendering in JSX

#### Using Ternary

```jsx
{isLoggedIn ? <Home /> : <Login />}
```

#### Using AND (`&&`)

```jsx
{isAdmin && <AdminPanel />}
```

---

## 🔷 JSX with Styles

#### Inline style

```jsx
<div style={{ color: "red", fontSize: "20px" }}>
```

⚠️ Double braces:

* 1st → JS expression
* 2nd → object

---

## 🔷 JSX & Events

HTML:

```html
<button onclick="clickMe()">Click</button>
```

JSX:

```jsx
<button onClick={clickMe}>Click</button>
```

- ✔ camelCase
- ✔ function reference

---

## 🔷 JSX with Lists (map)

```jsx
users.map(user => (
  <li key={user.id}>{user.name}</li>
))
```

📌 `key` helps React track changes efficiently

---

## 🔷 JSX is JavaScript (Intermediate)

You can:

```jsx
const element = <h1>Hello</h1>;

if (isLoggedIn) {
  element = <Dashboard />;
}
```

JSX is just **syntactic sugar**.

---

## 🔷 Fragment & JSX

JSX requires one parent → Fragment solves it:

```jsx
<>
  <Header />
  <Footer />
</>
```

No extra DOM nodes ✔

---

## 🔷 JSX Differences from HTML (Quick Table)

| JSX               | HTML      |
| ----------------- | --------- |
| className         | class     |
| htmlFor           | for       |
| camelCase attrs   | lowercase |
| JS inside `{}`    | no JS     |
| Self-closing tags | required  |

---

## 🔷 Advanced JSX Concepts

### 1️⃣ JSX as Expressions

```jsx
const greeting = <h1>Hello</h1>;
```

---

### 2️⃣ Props in JSX

```jsx
<Component name="Shiv" age={23} />
```

---

### 3️⃣ Children in JSX

```jsx
<Card>
  <h1>Title</h1>
</Card>
```

---

### 4️⃣ JSX Spread Operator

```jsx
<Component {...props} />
```

---

### 5️⃣ JSX & Security (XSS)

React **escapes values automatically**:

```jsx
<h1>{userInput}</h1>
```

✔ Safe by default

⚠️ Dangerous:

```jsx
<div dangerouslySetInnerHTML={{ __html: html }} />
```

---

### 🔷 Performance & JSX

* JSX → virtual DOM
* Fewer DOM updates
* Faster UI rendering

JSX itself isn’t slow — **DOM is**

---

## 🔥 Common Interview Questions

#### ❓ Is JSX HTML?

❌ No, it’s JavaScript

#### ❓ Can browser read JSX?

❌ Needs Babel

#### ❓ Why JSX is faster?

✔ Optimized diffing via virtual DOM

#### ❓ JSX vs `createElement`?

JSX = cleaner syntax

---

## 🧠 One-Line Interview Answer

> **JSX is a JavaScript syntax extension that allows writing UI components in a declarative and readable way, which gets compiled into `React.createElement` calls.**

---

## 🎨 Styling in React (Beginner → Advanced)

React supports **multiple ways** to style components.
There is **no single correct way** — choice depends on **project size & team**.

---

### 🔹 1. Inline Styles (Beginner)

#### ✅ Syntax

```jsx
function App() {
  return (
    <h1 style={{ color: "red", fontSize: "24px" }}>
      Hello React
    </h1>
  );
}
```

#### ⚠️ Rules

* Styles are **objects**
* Properties use **camelCase**
* Values are strings or numbers

#### ❌ Limitations

* No hover, media queries
* Not reusable
* Bad for large apps

---

### 🔹 2. CSS Stylesheet (Most Common)

#### 📁 File Structure

```
App.jsx
App.css
```

#### Usage

```css
.title {
  color: blue;
  font-size: 24px;
}
```

```jsx
import "./App.css";

<h1 className="title">Hello</h1>
```

#### ✅ Pros

* Simple
* Familiar
* Good for beginners

#### ❌ Cons

* Global scope
* Class name conflicts

---

### 🔹 3. CSS Modules (Intermediate ⭐)

#### File

```css
App.module.css
```

#### Usage

```jsx
import styles from "./App.module.css";

<h1 className={styles.title}>Hello</h1>
```

#### ✅ Benefits

* Scoped styles
* No naming conflicts
* Clean for medium projects

---

### 🔹 4. Conditional Styling

#### Using ternary

```jsx
<button className={isActive ? "btn active" : "btn"}>
```

#### Using template literal

```jsx
<button className={`btn ${isActive && "active"}`}>
```

---

### 🔹 5. Dynamic Inline Styles

```jsx
<div style={{ color: isError ? "red" : "green" }}>
```

---

### 🔹 6. Styled Components (Advanced 💎)

CSS-in-JS library

```bash
npm install styled-components
```

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px;
`;

<Button>Click</Button>
```

#### ✅ Pros

* Scoped styles
* Dynamic props
* Theming

#### ❌ Cons

* Extra dependency
* Runtime cost

---

### 🔹 7. Tailwind CSS (Industry Favorite 🔥)

Utility-first CSS

```jsx
<button className="bg-indigo-600 text-white px-4 py-2 rounded">
  Click
</button>
```

#### ✅ Why companies love it

* No CSS files
* Fast development
* Consistent UI

#### ❌ Learning curve

* Long class names

---

### 🔹 8. Sass / SCSS

```scss
$primary: blue;

.btn {
  color: $primary;
}
```

Used with React normally via CSS/Modules.

---

### 🔹 9. Global Styles

Used for:

* body
* reset CSS
* fonts

```css
body {
  margin: 0;
  font-family: sans-serif;
}
```

---

### 🔹 10. Responsive Styling

#### CSS Media Queries

```css
@media (max-width: 768px) {
  .box {
    font-size: 14px;
  }
}
```

#### Tailwind

```jsx
<div className="text-xl md:text-2xl lg:text-3xl">
```

---

## 🧠 Comparison Table (Interview Gold)

| Method            | Scope     | Best For             |
| ----------------- | --------- | -------------------- |
| Inline            | Component | Small dynamic styles |
| CSS               | Global    | Small apps           |
| CSS Modules       | Local     | Medium apps          |
| Styled Components | Local     | Complex UI           |
| Tailwind          | Utility   | Fast development     |

---

## 🔥 Common Interview Questions

#### ❓ Why `className` not `class`?

Because `class` is a JS keyword.

#### ❓ Best styling approach?

👉 Depends on project needs.

#### ❓ Inline vs CSS?

Inline = JS-driven
CSS = better separation

---

### 🧠 One-Line Interview Answer

> **React supports multiple styling approaches like inline styles, CSS, CSS Modules, CSS-in-JS, and utility-first frameworks such as Tailwind, allowing flexible and scalable UI development.**

# Day-04
- `App.js` is root component.

## React Components: The Foundation
React components are the building blocks of React applications. They encapsulate the UI logic into reusable pieces, making development more manageable and efficient. Components can be functional or class-based and define the structure, behavior, and appearance of different parts of the user interface.


## Styling React Components
Styling React components involves applying visual styles to enhance the appearance of the user interface. There are several approaches to styling React components, each with its advantages and use cases:


### Inline Styles
With inline styles, CSS styles are declared directly within the JSX code using JavaScript objects. This approach offers scoped styles and dynamic styling based on component props or state. However, it may lead to cluttered JSX code and limited reusability of styles.


### External CSS Files
You can use traditional CSS files to style React components. This approach separates the styling logic from the component logic, promoting better organization and reusability. CSS files can be imported into React components using the import statement.


### CSS Modules
CSS Modules provide a way to scope CSS styles locally to individual React components. Styles defined in CSS Modules are automatically scoped to the component where they are imported, preventing style conflicts and promoting encapsulation. CSS Modules are a popular choice for styling React components in larger applications.


### CSS-in-JS Libraries
CSS-in-JS libraries, such as styled-components, Emotion, and CSS Modules, offer a more dynamic approach to styling React components. With CSS-in-JS, styles are defined directly within JavaScript code using tagged template literals or JavaScript objects. This approach enables component-level theming, dynamic styling based on props, and better integration with component libraries.


## Choosing the Right Approach
The choice of styling approach depends on factors such as project size, team preferences, and requirements:
For small projects or quick prototyping, inline styles or external CSS files may suffice.
For larger projects with complex styling requirements, CSS Modules or CSS-in-JS libraries offer better organization and scalability.
Consider maintainability, performance, and developer experience when selecting a styling approach for your React components.


## Conclusion
React styles play a crucial role in defining the visual appearance of React components. By choosing the right styling approach and adopting best practices, you can create well-designed, reusable, and maintainable React components that provide an exceptional user experience. Experiment with different styling techniques to find the approach that best suits your project requirements and team preferences.


# Day-05

## create-react-app
`create-react-app` is a **CLI** tool (software) which helps to create react application. It provide react-app scaffolding.


## Importing Components
In React, importing components is like bringing in pieces of functionality from other files to use in your current file. There are two main ways to import components:


### Default Imports
When you import a component using a default import, you're importing the main export from a file. This means that whatever is exported as the default in the source file is what you'll get when you import it elsewhere.


### Named Imports
With named imports, you're importing specific pieces of functionality from a file. This allows you to cherry-pick exactly what you need from that file, rather than importing everything. Named imports are useful when you have multiple exports from a single file and you only need to use specific ones.


## Exporting Components
Exporting components allows you to make them available for use in other parts of your application. There are two main ways to export components:


### Default Exports
When you export a component as default, it means that it's the primary thing being exported from that file. You can only have one default export per file. Default exports are useful when you want to export a single component or function as the main thing from a file.


### Named Exports
Named exports allow you to export multiple components or functions from a single file, each with its own name. This is useful when you have several pieces of functionality that you want to export individually. With named exports, you can import specific exports by their names in other files.


## Importing and Using Components
Once you've exported your components from their respective files, you can import and use them in other parts of your application. Whether you're importing a default export or named exports, you simply use the import keyword followed by the name of the component or function you want to import, along with the file path.


## Conclusion
Importing and exporting components in React allows you to organize your code into reusable and modular pieces, making it easier to maintain and scale your applications. Understanding the different ways to import and export components gives you the flexibility to structure your code in a way that best suits your project's needs.



# Day-28 to 74 E-commerce project

## What we will learn in this
- useStae
- useEffect
- redux
- firebase
- form validation
- http request
- payment gateway
- shared/reusable component
- Auth
- etc


## Notes 
- 1st design Admin pannel

## Libraries
- tailwindcss
- react-router-dom

## routing 
- always write routing code in App.jsx

## hight
- h-full : 100% keep position fixed
- h-screen - 100vh : works without position fixed

## public folder
- / refers to public folder in vite-react
## react-router
- nested route do not give / to children
- children in react router
- react-router-dom provides useLocation() hook which return an object which have pathname property whivh gives path 







### Buynest
- []- Make 404 creative
- [] - Orders admin tfoot - total order value to return to order total return 