import React, { useEffect, useRef, useState } from "react";

function Modal(props) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);
  return (
    <>
      <div id={props.id} className={`modal ${active ? "active" : ""}`}>
        {props.children}
      </div>
    </>
  );
}

export const ModalContent = (props) => {
  const contentRef = useRef(null);
  const handleClose = () => {
    contentRef.current.parentNode.remove("active");
    if (props.onClose) props.onClose();
  };
  return (
    <>
      <div className="modal-content" ref={contentRef}>
        {props.children}
        <div className="modal-content-close" onClick={handleClose}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
      </div>
    </>
  );
};
export default Modal;
