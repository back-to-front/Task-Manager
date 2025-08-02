import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className='app'>
        <TodoApp />
      </div>
    </>
  );
}

export default App;
