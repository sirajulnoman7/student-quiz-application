import React from 'react';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Question = ({ question }) => {
    // console.log(question)

    return (
        <div className='mx-32'>

            <p>{question.length}</p>
            {
                question.map(singleQuestion => <SingleQuestion singleQuestion={singleQuestion}></SingleQuestion>)
            }
        </div>
    );
};

export default Question;