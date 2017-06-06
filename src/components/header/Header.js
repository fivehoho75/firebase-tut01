import React from 'react';

export { default as Logo } from './Logo';
export { default as AuthButton } from './AuthButton';

const Header = ({children}) => {
        return (
            <div>
                <div className="header-wrapper">
                    <div className="header">
                        {children}
                    </div>   
                </div>
                <div className="header-space"/>
            </div>
        );
}

export default Header;