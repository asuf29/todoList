import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Form
        onSubmit={(text) => setTodos({ text, complete: false, ...todos })}
      />
      <div>
        {todos.map(({ text }) => (
          <div key={text}>{text}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
