import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodo] = useState([]);
  const [value, setvalue] = useState("");

  const addtodo = (e) => {
    e.preventDefault();
    setTodo([...todos, value]);
    setvalue("");
  };

  const removetodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodo(newTodos);
  };

  return (
    <div className="container">
      <h1 className="text-center"> Todo List with React</h1>
      <div><form className="form">
        <input className="input" value={value} placeholder="Write a todo" onChange={(e) => setvalue(e.target.value)} />
        <button className="green" onClick={addtodo}>
          add
        </button>
        <button className="red" onClick={() => setTodo([""])}>
          clear
        </button>
      </form>
      </div>
      {todos.map((todo, id) => (
        <div className="items">
          <div className="item" key={id}>
            <h4>{todo}</h4>
            <button className="red" onClick={() => removetodo(id)}>
              clear
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
