import React from 'react';

const Options = ({ options, onSelect }) => {
    return (
        <>
            {options.map((option, index) => (onselect(option)>{option}
            ))}
        
        </>
    );
};

export default Options;