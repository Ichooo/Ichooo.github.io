import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// Component for page routing
const PageSwitcher = (props) => {
    
    // Change page on click
    const onChangPage = (page) => {
        props.setCurrPage(page);

        switch(page) {
            case 0:
                window.scrollTo({top: 0, behavior: 'smooth'});   
                break;
            case 1:
                document.querySelector('.portfolio').scrollIntoView({behavior: 'smooth'});
                break;
            case 2:
                document.querySelector('.commitments').scrollIntoView({behavior: 'smooth'});
                break;
            default:
                break;
        }
    }

    // Update url depending on which page the user currently is on
    const scrollHandeler = () => {
        const winScroll = document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height

            if (scrolled < 0.33) {
                props.setCurrPage(0);
                props.history.push('/');
            } else if (scrolled > 0.33 && scrolled < 0.66 ) {
                props.setCurrPage(1);
                props.history.push('/portfolio');
            } else {
                props.setCurrPage(2);
                props.history.push('/commitments');
            }
    }

    // Locates correct page when entering site
    useEffect(() => {
        switch(location.pathname.toLowerCase())  {
            case "/":
                break;
            case "/portfolio":
                onChangPage(1);
                break;
            case "/commitments":
                onChangPage(2);
                break;
            default:
                break;
        }

        document.addEventListener('wheel', throttle(scrollHandeler, 500));
        document.addEventListener('wheel', throttle(scrollHandeler, 500));
        
    },[])

    function throttle(func, limit) {
        let inThrottle;
        return function() {
          const args = arguments;
          const context = this;
          if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
          }
        };
      }

    return (
        <div className="pages">
            <div className="page-about">
                <h3 className="dot-title-1">About me</h3>
                <NavLink exact to="/">
                    <svg 
                        
                        className="dot-1"
                        width="24" 
                        height="24" 
                        viewBox="0 0 12 12" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="6" cy="6" r="6" fill="white"/>
                    </svg>
                </NavLink>
            </div>
            <div className="page-projects">
            <h3 className="dot-title-2">Projects</h3>
                <NavLink to="/portfolio">
                    <svg 
                        onClick={() => {onChangPage(1)}}
                        className="dot"
                        width="24" 
                        height="24" 
                        viewBox="0 0 12 12" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="6" cy="6" r="6" fill="white"/>
                    </svg>
                </NavLink>
            </div>
            <div className="page-commitments">
                <h3 className="dot-titlel-3">Commitments</h3>
                <NavLink to="/commitments">
                    <svg 
                        onClick={() => {onChangPage(2)}}
                        className="dot"
                        width="24" 
                        height="24" 
                        viewBox="0 0 12 12" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="6" cy="6" r="6" fill="white"/>
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}

export default withRouter(PageSwitcher);