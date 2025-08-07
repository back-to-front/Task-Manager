import React, { useState } from "react";
import TodoApp from "../components/TodoApp/TodoApp";
import "./Home.css";
import RateLimitedUI from "../components/RateLimitedUI/RateLimitedUI";

export default function Home() {
  const [isRateLimited, setIsRateLimited] = useState(true);

  return (
    <div className='app'>
      {isRateLimited && <RateLimitedUI />}
      <TodoApp />
    </div>
  );
}
