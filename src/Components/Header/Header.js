import React from 'react';
import { Outlet } from 'react-router-dom';
import Navlink from '../Navlink/Navlink';

const Header = () => {
    return (
        <div>
            <Navlink></Navlink>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;