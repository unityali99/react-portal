import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, setIsOpen }) => {
  const MODAL_STYLE = {
    position: "fixed",
    zIndex: 1000,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "2.5rem 4rem",
  };

  const OVERLAY_STYLE = {
    position: "fixed",
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
  };

  const BUTTON_STYLE = {
    position: "absolute",
    left: 0,
    top: 0,
    margin: ".1rem",
    cursor: "pointer",
  };
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <React.Fragment>
      <div style={OVERLAY_STYLE} onClick={() => setIsOpen(false)} />
      <div style={MODAL_STYLE}>
        {children}
        <button onClick={() => setIsOpen(false)} style={BUTTON_STYLE}>
          x
        </button>
      </div>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default Modal;
