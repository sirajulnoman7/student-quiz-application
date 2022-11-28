import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo-smaller-222-removebg-preview.png';

const Navlink = () => {
    const [open, setOpen] = useState(false);


    return (
        <div>




            <div onClick={() => setOpen(!open)} className="h-6 w-6 ml-7 md:hidden" >
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <div className='flex justify-between items-center bg-cyan-400'>
                <div>
                    <img className='w-50  sm:block hidden ' src={logo} alt="" />
                </div>
                <ul className={`md:flex w-full justify-center gap-6 text-lg font-semibold py-2 absolute duration-700 ease-in md:static ${open ? 'top-6' : 'top-[-500px]'} `}>
                    <li className='hover:bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 px-2 rounded'>
                        <NavLink to='/'
                            className={({ isActive }) =>
                                isActive ? 'underline' : undefined
                            }
                        >Home</NavLink>
                    </li>
                    <li className='hover:bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 px-2 rounded'>
                        <NavLink to='/about'
                            className={({ isActive }) =>
                                isActive ? 'underline' : undefined
                            }
                        >About</NavLink>
                    </li>
                    <li className='hover:bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 px-2 rounded'>
                        <NavLink to='/academics'
                            className={({ isActive }) =>
                                isActive ? 'underline' : undefined
                            }
                        >Academics</NavLink>
                    </li>
                    <li className='hover:bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 px-2 rounded'>
                        <NavLink to='/course'
                            className={({ isActive }) =>
                                isActive ? 'underline' : undefined
                            }
                        >Course</NavLink>
                    </li>
                    <li className='hover:bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 px-2 rounded'>
                        <NavLink to='/blog'
                            className={({ isActive }) =>
                                isActive ? 'underline' : undefined
                            }
                        >Blog</NavLink>
                    </li>
                    <li className='hover:bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 px-2 rounded'>
                        <NavLink to='/quiz'
                            className={({ isActive }) =>
                                isActive ? 'underline' : undefined
                            }
                        >Quiz</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navlink;