import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { NaverContext } from "./context/NaverContext";
import Todo from "./pages/Todo";

function App() {
  return (
    <div>
      <NaverContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path={"*"} element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </NaverContext>
    </div>
  );
}

export default App;
