import React, { useState } from "react";
import "./App.css";
import Tooltip from "./Tooltip";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="parent">
    <Tooltip text="I'm  propss text">I'm children prop hover me to see props text</Tooltip>
    </div>
  );
}

export default App;
