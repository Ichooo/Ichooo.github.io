import React, { useRef, useEffect } from "react";
import ReactModal from "react-modal";

const Modal = props => {
  return (
    <ReactModal
      isOpen={props.modalIsOpen}
      contentLabel="Example Modal"
      onRequestClose={() => props.setModalIsOpen(false)}
    >
      <div class="modal-content">
        <h1>{props.modalContent}</h1>
        <button onClick={() => props.setModalIsOpen(false)}>close</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
