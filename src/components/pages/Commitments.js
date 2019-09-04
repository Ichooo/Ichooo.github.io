import React from 'react';
import commitments from '../../assets/commitments';

const Commitments = () => {
    return (
        <div className="commitments">
            <h3 className="commitments-title"> COMMITMENTS</h3>
            <div className="commitments-container">
                {commitments.map((commitment, index) => {
                    return (
                        <div key={index} className="commitment-border">
                            <div className="commitment">
                                <h3 className="commitment-title">{commitment.title}</h3>
                                <img className="commitment-image" src={require(`../../img/${commitment.image}.jpg`)} alt="commitmentImg"/>
                            </div>  
                        </div>
                )
            })}
            </div>
        </div>
    );
}

export default Commitments;