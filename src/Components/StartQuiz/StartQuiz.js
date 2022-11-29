import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const StartQuiz = () => {
    const quiz = useLoaderData()
    const question = (quiz.data.questions)

    return (
        <div>
            <h3>Start quiz</h3>

            <Question question={question}></Question>
        </div>
    );
};

export default StartQuiz;