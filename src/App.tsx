import { useRef, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import StickyCursor from "./components/StickyCursor";

import SVGLoader from "./components/SVGLoader";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);
  const stickyElement = useRef(null);
  return (
    <>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <SVGLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
