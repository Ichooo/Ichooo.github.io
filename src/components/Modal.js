import React from "react";
import ReactModal from "react-modal";
import modalImg from "../img/me.jpg";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Modal = props => {
  return (
    <ReactModal
      style={{
        overlay: { backgroundColor: "transparant" },
        content: {
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }}
      isOpen={props.modalIsOpen}
      contentLabel="Modal"
      onRequestClose={() => props.setModalIsOpen(false)}
    >
      <h1 className="modal-title">{props.modalContent.title}</h1>
      <p className="modal-subtitle">{props.modalContent.subtitle}</p>
      <p className="modal-introtext">{props.modalContent.introText}</p>
      <div className="modal-middle-container">
        <div className="infobox">
          <b>{props.modalContent.timeFrame}</b>
          <p>Category: {props.modalContent.category} </p>
          <h3>Technologies used</h3>
          {props.modalContent.technologiesUsed
            ? props.modalContent.technologiesUsed.map(tec => {
                return <p>{tec}</p>;
              })
            : null}
        </div>
        <div className="carousel-warpper">
          <Carousel showArrows={true} showThumbs={false}>
            <div>
              <img
                src={modalImg}
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>
            <div>
              <img
                src={modalImg}
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>

            <div>
              <img
                src={modalImg}
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>
          </Carousel>
        </div>
        <div className="infobox">
          <b>Source code</b>
          <b>Project reports</b>
        </div>
      </div>

      <div className="modal-text">
        <p>{props.modalContent.extendedText}</p>
      </div>
      <button onClick={() => props.setModalIsOpen(false)}>close</button>
    </ReactModal>
  );
};

/*
<iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/369190884"
              style={{ width: "100%", height: "100%" }}
              frameborder="0"
              allowfullscreen
            ></iframe>
            */
export default Modal;
