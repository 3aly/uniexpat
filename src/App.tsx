import React from "react";
import { Home, NavBar } from "./pages";

function App() {
  return (
    <div className="static">
      <NavBar />

      <Home />
      <section
        id="services"
        className="h-screen bg-red-500 flex items-center justify-center text-white"
      >
        <h2>Services Section</h2>
      </section>
      <section
        id="about"
        className="h-screen bg-green-500 flex items-center justify-center text-white"
      >
        <h2>About Section</h2>
      </section>
      <section
        id="contact"
        className="h-screen bg-purple-500 flex items-center justify-center text-white"
      >
        <h2>Contact Section</h2>
      </section>
    </div>
  );
}

export default App;
