import React, { useRef, useEffect } from "react";
import ReactModal from "react-modal";

const Modal = props => {
  return (
    <ReactModal
      isOpen={props.modalIsOpen}
      contentLabel="Example Modal"
      onRequestClose={() => props.setModalIsOpen(false)}
    >
      <div id="myModal" class="modal">
        <div class="modal-content">
          <h1>{props.modalContent}</h1>
          <p style={{ color: "black" }}>Some text in the Modal..</p>
          <button onClick={() => console.log("hehe")}>close</button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
