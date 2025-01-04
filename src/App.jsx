import { useState } from "react";
import "./App.css";

import ThreadHeader from "./ThreadHeader";
import Thread from "./Thread";

function App() {
  return (
    <div>
      <ThreadHeader />
      <div className="threadTable">
        <Thread />
      </div>
    </div>
  );
}

export default App;
