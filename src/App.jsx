import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ThreadNew from "./ThreadNew";
import Threads from "./Threads";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/threads/new" element={<ThreadNew />} />
      <Route path="/threads/:thread_id" element={<Threads />} />
    </Routes>
  );
};

export default App;
