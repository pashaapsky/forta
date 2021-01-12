import React from 'react';

export const Header = ({children}) => {
    return (
        <div className={`header`}>
            <div className="header__container">
                {children}
            </div>
        </div>
    );
};

export const HeaderGroup = ({children}) => {
    return (
        <div className="header__group">
            {children}
        </div>
    );
};

export const HeaderItem = ({children}) => {
    return (
        <div className="header__item">
            {children}
        </div>
    );
};


