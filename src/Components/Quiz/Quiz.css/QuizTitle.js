import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { quizContext } from '../Quiz';
import './QuizTitle.css'
const QuizTitle = ({ quizs }) => {
    // const quiz1 = useContext(quizContext);

    return (

        <div className='quiz-container md:mt-20 md:mx-14 '>
            <img className='image ml-3' src={quizs.picture} alt="" />
            <p className='text-md font-semibold mt-6'>{quizs.body} </p>
            <Link to={quizs.number}> <h3 className='text-xl font-bold mt-2 cursor-pointer hover:text-blue-700 underline'>{quizs.name}</h3></Link>

        </div>

    );
};

export default QuizTitle;