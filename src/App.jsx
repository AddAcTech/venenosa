import React from "react";
import Title from "./components/Title";
import About from "./components/About";
import Weekly from "./components/Weekly";
import Menu from "./components/Menu";
import NextEvent from "./components/NextEvent";
import FindUs from "./components/FindUs";

function App() {
  return (
    <div className="bg-backg text-textcl">
      <Title />
      <About />
      <p id="offers" className="text-center px-2 text-3xl font-bold my-4">
        Conoce nuestras promociones:
      </p>
      <Weekly />
      <p id="menu" className="text-center text-2xl font-bold mt-4">
        Todas nuestras bebidas:
      </p>
      <Menu />
      <NextEvent />
      <FindUs />
    </div>
  );
}

export default App;
