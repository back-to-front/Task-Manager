import { useState, useEffect } from "react";
import TodoApp from "../components/TodoApp/TodoApp";
import "./Home.css";
import { Toaster } from "react-hot-toast";
import RateLimitedUI from "../components/RateLimitedUI/RateLimitedUI";
import axios from "axios";
import toast from "react-hot-toast";

export default function Home() {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className='app'>
      {isRateLimited ? <RateLimitedUI /> : <TodoApp />}
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
