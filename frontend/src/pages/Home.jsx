import React from "react";
import TodoApp from "../components/TodoApp/TodoApp";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className='app'>
        <TodoApp />
      </div>
    </div>
  );
}
