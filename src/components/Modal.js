import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "5%",
    bottom: "5%",
    left: "10%",
    display: "flex"
  }
};

const Modal = props => {
  return (
    <ReactModal
      style={customStyles}
      isOpen={props.modalDetails.isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={() =>
        props.setModalDetails({
          ...props.modelDetails,
          isOpen: false,
          index: -1
        })
      }
      shouldCloseOnOverlayClick={false}
    >
      <div className="modal-container">
        <p>Modal no: {props.modalDetails.index}</p>
        <button
          className="exit-button"
          onClick={() =>
            props.setModalDetails({
              ...props.modelDetails,
              isOpen: false,
              index: -1
            })
          }
        >
          Close Modal
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
