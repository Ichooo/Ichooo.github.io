import React, {Component} from 'react';

class PageSwitcher extends Component {
    render() {
        return (
            <div className="pages">
                <div className="pageAbout">
                    <h3 className="dotTitlel1">About me</h3>
                    <svg 
                        className="dot active"
                        width="12" 
                        height="12" 
                        viewBox="0 0 12 12" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="6" cy="6" r="6" fill="white"/>
                    </svg>
                </div>
                <div className="pageProjects">
                <h3 className="dotTitlel2">Projects</h3>
                    <svg 
                        className="dot"
                        width="12" 
                        height="12" 
                        viewBox="0 0 12 12" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="6" cy="6" r="6" fill="white"/>
                    </svg>
                </div>
                <div className="pageCommitments">
                <h3 className="dotTitlel3">Commitments</h3>

                    <svg 
                        className="dot"
                        width="12" 
                        height="12" 
                        viewBox="0 0 12 12" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="6" cy="6" r="6" fill="white"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default PageSwitcher;