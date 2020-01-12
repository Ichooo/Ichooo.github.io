import React from "react";
import commitments from "../../assets/commitments";

const Commitments = props => {
  return (
    <div className="commitments">
      <h3 className="section-title"> COMMITMENTS</h3>
      <div className="commitments-container">
        {commitments.map((commitment, index) => {
          return (
            <div
              key={index}
              className="bubble-border"
              onClick={() => props.toggleModal(commitment)}
            >
              <div className="bubble">
                <img
                  className="bubble-image"
                  src={require(`../../img/${commitment.image}.jpg`)}
                  alt="commitmentImg"
                />
                <h3 className="bubble-title">{commitment.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Commitments;
