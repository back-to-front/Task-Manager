import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
