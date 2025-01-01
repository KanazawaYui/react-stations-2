import { useState } from "react";
import "./App.css";

import ThreadHeader from "./ThreadHeader";
import Thread from "./Thread";

function App() {
  return (
    <div>
      <ThreadHeader />
      <Thread />
    </div>
  );
}

export default App;
