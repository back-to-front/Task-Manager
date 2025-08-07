import { useState } from "react";
import TodoApp from "../components/TodoApp/TodoApp";
import "./Home.css";
import { Toaster } from "react-hot-toast";
import RateLimitedUI from "../components/RateLimitedUI/RateLimitedUI";

export default function Home() {
  const [isRateLimited, setIsRateLimited] = useState(false);

  // Pass the rate limiting handler to TodoApp
  const handleRateLimit = (limited) => {
    setIsRateLimited(limited);
  };

  return (
    <div className='app'>
      {isRateLimited ? (
        <RateLimitedUI />
      ) : (
        <TodoApp onRateLimited={handleRateLimit} />
      )}
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 3000,
          style: {
            background: "#003049",
            color: "#ffffff",
          },
          success: {
            style: {
              background: "#f77f00",
            },
          },
          error: {
            style: {
              background: "#d62828",
            },
          },
        }}
      />
    </div>
  );
}
