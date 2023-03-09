import React, { useRef } from 'react';
import { AddCategory } from './AddCategory';


const NavigationBar = ({onAddCategory}) => {
    const componentRef = useRef(null);

    return (
    <div className="nav-bar-container" ref={componentRef}>
        <nav className="nav-bar">
            <div className="nav-bar-logo-container">
                <a className='nav-bar-logo-link' href="/">
                    <img className="nav-bar-logo" src="../public/images/Mister-GIF.png"/>
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
