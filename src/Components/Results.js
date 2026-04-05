import React from 'react';

const Results = ({ score, total }) => {
    return (
        <>
        Quiz Completed!       
        Your Score: {score} out of {total}
        </>
    );
};

export default Results;