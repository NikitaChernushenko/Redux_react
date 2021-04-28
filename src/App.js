import React from "react";
import "./App.css";
import TodoList from "./app/Containers/TodoList/TodoList";

function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Your todo list</h1>
      </header>
      <section>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
