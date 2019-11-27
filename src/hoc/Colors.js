import React from 'react';

const Color = (WrappedComponent) => {

    const colours = ['white'];
    const randompick = colours[Math.floor(Math.random() * 5)];

    return (props) => {
        return (
            <div className={randompick}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Color