import React, {Component} from 'react';
import mailLogo from '../logos/mail-logo-outline.png';
import fbLogo from '../logos/fb-logo.png';
import GHLogo from '../logos/github-logo-black.png';
import IGLogo from '../logos/ig-logo.png';
import CVLogo from '../logos/cv-logo.png';


class SocialIcons extends Component {
    render() {
        return (
            <div className="social-container">
            <a href="mailto:aresson.pontus@gmail.com">
                <img className="mail-logo" src={mailLogo} alt="mail"></img>
            </a>
            <a href="https://www.facebook.com/pontus.arnesson">
                <img className="fb-logo" src={fbLogo} alt="facebook"></img> 
            </a>
            <a href="https://github.com/Ichooo">
                <img className="github-logo" src={GHLogo} alt="github"></img> 
            </a>
            <a href="https://www.instagram.com/arnessonpontus/">
                <img className="ig-logo" src={IGLogo} alt="instagram"></img>                  
            </a>
            <a href="files/CV_2019_Pontus.pdf">
                <img className="cv-logo" src={CVLogo} alt="cv"></img>                  
            </a>
 
            </div>
        )
    }
}

export default SocialIcons;