import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import ThreadList from "./ThreadList";
import ThreadNew from "./ThreadNew";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ThreadList />} />
      <Route path="/threads/new" element={<ThreadNew />} />
    </Routes>
  );
}

export default App;
