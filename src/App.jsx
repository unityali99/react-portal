import { useState } from "react";
import Modal from "./modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const TEXT_STYLE = {
    padding: "2rem 5rem",
    backgroundColor: "orange",
    width: "20%",
    textAlign: "center",
    margin: "0 auto",
  };

  const BUTTON_STYLE = {
    padding: "1rem 2rem",
    margin: "1rem 2rem",
    cursor: "pointer",
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div style={TEXT_STYLE}>My Modal App</div>

      <button onClick={() => setIsOpen((value) => !value)} style={BUTTON_STYLE}>
        Toggle Modal
      </button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        My Modal
      </Modal>
    </div>
  );
}

export default App;
