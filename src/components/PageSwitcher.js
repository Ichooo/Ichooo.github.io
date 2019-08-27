
import React, { useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const PageSwitcher = ({currPage, setCurrPage}) => {

    const onChangPage = (page) => {
        setCurrPage(page);
    }

    //TODO: switching page by scroll not working properly
    const handleScroll = (e) => {
        if (e.deltaY > 0) { 
            if (currPage === 2) {
                setCurrPage(0);
            } else {
                setCurrPage(currPage += 1);
            }
        } else { 
            if (currPage === 0) {
                setCurrPage(2);
            } else {
                setCurrPage(currPage -= 1);
            }
        }
    }

    useEffect(() => {
        document.addEventListener('wheel', throttle(handleScroll, 1500));
        document.addEventListener('touchmove', throttle(handleScroll, 1500));
    },[]);

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
            {currPage === 0 ? <Redirect exact to="/" /> : null}
            {currPage === 1 ? <Redirect to="/portfolio" /> : null}
            {currPage === 2 ? <Redirect to="/commitments" /> : null}
            {console.log('current page: ' + currPage)}
            <div className="page-about">
                <h3 className="dot-title-1">About me</h3>
                <NavLink exact to="/">
                    <svg 
                        onClick={() => {onChangPage(0)}}
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
                <NavLink to="/Commitments">
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

export default PageSwitcher;