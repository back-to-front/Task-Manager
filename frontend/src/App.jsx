import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import ScrollToAnchor from "./components/ScrollToAnchor";

// Lazy load components
const Landing = lazy(() => import("./pages/Landing"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Navbar />
      <ScrollToAnchor />
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
