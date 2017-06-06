import React from 'react';

const Header = ({children}) => {
        return (
            <div className="header-wrapper">
                <div className="header">
                    {children}
                </div>
                <div className="header-space"/>   
            </div>
        );
}

export default Header;