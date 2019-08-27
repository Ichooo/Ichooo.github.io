import React from 'react';
import commitments from '../../assets/commitments';


const Commitments = () => {
    return (
        <div className="portfolio">
            <h3 className="portfolio-title"> COMMITMENTS</h3>
            <div className="portfolio-container">
                {commitments.map((commitment, index) => {
                    return (
                        <div key={index} className="project">
                            <h3 className="project-title">{commitment.title}</h3>
                            <img className="project-image" src={require(`../../img/${commitment.image}.jpg`)} alt="projectImg"/>
                        </div>  
                )
            })}
            </div>
        </div>
    );
}

export default Commitments;