import React from "react";
import { BrowserRouter } from "react-router-dom";
import Path from "./routes/Path";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Path />
    </BrowserRouter>
  );
};

export default App;
