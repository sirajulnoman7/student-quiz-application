import React, { createContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quizheader from '../Quizheader/Quizheader';
import './Quizs.css'
// export const quizContext = createContext('context')
const Quiz = () => {
    const quiz = useLoaderData([]);
    // const [quizs, setQuiz] = useState(quiz)
    // const [quiz1, setQuiz] = useState(quiz)
    // if (!quiz) {
    //     setQuiz(quiz.number)
    // }
    // console.log(quiz1)

    return (
        // <quizContext.provider value={[quiz, setQuiz]}>

        <section className='bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 m-0'>
            <div className=''>
                <Quizheader quiz={quiz}></Quizheader>


            </div>
        </section>

    );
};

export default Quiz;