import React from 'react';

const test = () => {
    const lang =localStorage.getItem("lan")
    return (
        <div>
            {
                lang ? "eeeeeeeeeeeeee": "bbbbbbbbbbbbbb"
            }
        </div>
    );
};

export default test;