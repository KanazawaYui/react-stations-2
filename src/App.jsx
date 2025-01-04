import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ThreadNew from "./ThreadNew";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/threads/new" element={<ThreadNew />} />
    </Routes>
  );
}

export default App;
