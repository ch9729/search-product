import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
