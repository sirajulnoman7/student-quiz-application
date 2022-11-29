import React, { useContext } from 'react';
// import { quizContext } from '../Quiz/Quiz';
import QuizTitle from '../Quiz/Quiz.css/QuizTitle';

const Quizheader = ({ quiz }) => {
    // const quiz1 = useContext(quizContext);
    // console.log(quiz1)
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:mt-0  mt-52'>

                {
                    quiz.map(q => <QuizTitle quizs={q} key={q.id}></QuizTitle>)
                }

            </div>
        </div>
    );
};

export default Quizheader;