import React from 'react';

const Color = (WrappedComponent) => {

    const colours = ['red', 'blue', 'green', 'orange', 'violet', 'yellow'];
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