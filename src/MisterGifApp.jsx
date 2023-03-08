import {useState} from 'react';
import { AddCategory, GifGrid } from './components/';

const MisterGifApp = () => {

    const [categories, setCategories] = useState(["Red Dead Redemption 2"]);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories.filter((category) => category.toLowerCase()!==newCategory.toLowerCase())]);
    };


  return (
    <>
        <div className="nav-bar-container">
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
        
        {
            categories.map((category, i) => {
                return (
                    <GifGrid 
                        key={`${category}`}
                        category={category}
                        firstPosition={!i ? true:false}
                    />
                );
                })
        }
    </>
  );
};

export {
    MisterGifApp
};
