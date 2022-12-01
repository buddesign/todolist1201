// src/App.js
import React, { Children } from "react";

function Child() {
  return <div>연결성공!</div>;
}

function Mother() {
  return <Child></Child>;
}

function GrandFather() {
  return <Mother></Mother>;
}

function App() {
  return <GrandFather />;
}

export default App;
