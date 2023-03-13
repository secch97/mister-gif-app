import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationBar, GifGrid } from './components/';

import {useState} from 'react';
import { ToastContainer } from 'react-toastify';


const MisterGifApp = () => {

    const [categories, setCategories] = useState(["Trending"]);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories.filter((category) => category.toLowerCase()!==newCategory.toLowerCase())]);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <NavigationBar onAddCategory={onAddCategory} ></NavigationBar>
            <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    limit={1}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
            />
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
            <a className='button-top' onClick={scrollToTop}>
                <FontAwesomeIcon 
                icon={["fas", "circle-up"]} 
                size="4x"
                />
            </a>
        </>
  );
};

export {
    MisterGifApp
};
