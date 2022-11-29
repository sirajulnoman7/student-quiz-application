import React from 'react';
import './SingleQuestion.css'
const SingleQuestion = ({ singleQuestion }) => {
    console.log(singleQuestion)
    return (
        <div className='option'>
            <h1 className='text-2xl font-semibold '>Quiz-No. {singleQuestion.question}</h1>
            <div className=" grid-cols-2 mt-10 mb-7 grid ">
                <div className='px-5 py-3 m-3 options hover:bg-slate-400 rounded cursor-pointer '>
                    {singleQuestion.options[0]}
                </div>
                <div className='px-5 py-3  m-3 options  hover:bg-slate-400 rounded cursor-pointer '>
                    {singleQuestion.options[1]}
                </div>
                <div className='px-5 py-3  m-3 options  hover:bg-slate-400 rounded cursor-pointer '>
                    {singleQuestion.options[2]}
                </div>
                <div className='px-5 py-3  m-3  options  hover:bg-slate-400 rounded cursor-pointer '>
                    {singleQuestion.options[2]}
                </div>
            </div>
        </div>
    );
};

export default SingleQuestion;