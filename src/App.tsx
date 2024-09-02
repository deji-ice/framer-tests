import { useState } from "react";

import "./App.css";
import Reveal from "./components/Reveal";
import HorizontalScroll from "./components/HorizontalScroll";
import Header from "./components/Header";
import StickyCursor from "./components/StickyCursor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <StickyCursor />
      <div className="bg-red-700 h-screen justify-center w-screen flex flex-col items-center">
        <Reveal width="100%">
          <h1 className="text-white text-4xl font-semibold text-center m-10">
            Vite + React
          </h1>
        </Reveal>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Reveal width="100%">
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </Reveal>
        </div>
        <Reveal width="fit-content">
          <p className="read-the-docs text-4xl text-white flex ">
            Click on the Vite and React logos to learn more
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className="flex flex-col items-center justify-center m-20 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            cupiditate optio excepturi nisi officiis consequatur commodi vel,
            doloremque quaerat ab molestiae eius autem voluptatem incidunt
            quibusdam necessitatibus laborum sunt pariatur.
          </div>
        </Reveal>
      </div>
      <HorizontalScroll />
      <div className="flex h-screen items-center justify-center bg-pink-900">
        <Reveal width="100%">
          <span className="font-semibold text-4xl uppercase text-slate-900">
            scroll up
          </span>
        </Reveal>
      </div>
    </>
  );
}

export default App;
