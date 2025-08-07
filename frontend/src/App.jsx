import { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

// Lazy load components
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className='page-loader'>
            <LoadingSpinner size='large' text='Loading page...' />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
