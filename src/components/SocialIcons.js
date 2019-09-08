import React, {Component} from 'react';
import mailLogo from '../logos/mail-logo-outline.png';
import fbLogo from '../logos/fb-logo.png';
import GHLogo from '../logos/github-logo-black.png';
import LinkedinLogo from '../logos/linkedin-logo.png';
import CVLogo from '../logos/cv-logo.png';


class SocialIcons extends Component {
    render() {
        return (
            <div className="social-container">
            <a 
                href="mailto:aresson.pontus@gmail.com"
                target="_blank" rel="noopener noreferrer"
                >
                <img className="mail-logo" src={mailLogo} alt="mail"></img>
            </a>
            <a 
                href="https://www.facebook.com/pontus.arnesson"
                target="_blank" rel="noopener noreferrer"
                >
                <img className="fb-logo" src={fbLogo} alt="facebook"></img> 
            </a>
            <a 
                href="https://github.com/arnessonpontus"
                target="_blank" rel="noopener noreferrer"
                >
                <img className="github-logo" src={GHLogo} alt="github"></img> 
            </a>
            <a 
                href="https://www.linkedin.com/in/pontus-arnesson-2a2212151/"
                target="_blank" rel="noopener noreferrer"
                >
                <img className="linkedin-logo" src={LinkedinLogo} alt="linkedin"></img>                  
            </a>
            <a 
                href="files/CV_2019_Pontus.pdf"
                target="_blank" rel="noopener noreferrer"
                >
                <img className="cv-logo" src={CVLogo} alt="cv"></img>                  
            </a>
 
            </div>
        )
    }
}

export default SocialIcons;