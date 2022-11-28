import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
    return (
        <div >

            <Link className='mt-20 flex justify-center ' to='start'>
                <button className='mt-30 flex justify-center px-3 py-2 rounded bg-orange-400 hover:bg-orange-800 cursor-pointer '>Quiz Start</button>
            </Link>

        </div>
    );
};

export default Quiz;