import React, { useRef } from 'react';
/* Components */
import { AddCategory } from './';


const NavigationBar = ({onAddCategory}) => {
    return (
    <div className="nav-bar-container">
        <nav className="nav-bar">
            <div className="nav-bar-logo-container">
                <a className='nav-bar-logo-link' href="/">
                    <img className="nav-bar-logo" src="../images/Mister-GIF.png"/>
                </a>
            </div>
            <div className="nav-bar-user-controls-container">
                <AddCategory onAddCategory={onAddCategory}></AddCategory>
            </div>
        </nav>
    </div>
    )
};

export {
    NavigationBar
};
