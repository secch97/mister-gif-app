/* Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer } from 'react-toastify';
/* Components */
import { NavigationBar, GifGrid, AppLoading, Footer } from './components/';
/* Helpers */
import { scrollToTop } from './helpers/scrollToTop';
import { loadPage } from './helpers/loadPage';
/* Hooks */
import {useState, useEffect} from 'react';

const MisterGifApp = () => {

    /* Hooks */
    const [categories, setCategories] = useState(["Trending"]);
    const [appLoaded, setAppLoaded] = useState(false);

    /* Element handlers */
    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories.filter((category) => category.toLowerCase()!==newCategory.toLowerCase())]);
    };

    /* State setters */
    loadPage(1000, setAppLoaded);

    /* JSX */
    let appRendered;
    if (appLoaded) {
        appRendered = (
            <>
                <NavigationBar onAddCategory={onAddCategory}></NavigationBar>
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

                <Footer/>
                <a className='button-top' onClick={scrollToTop}>
                    <FontAwesomeIcon 
                        icon={["fas", "circle-up"]} 
                        size="4x"
                    />
                </a>
            </>
        );
    }

    else{
        appRendered = (
            <AppLoading/>
        );
    }

    return (
        <div className="mister-gif">
            {appRendered}                
        </div>
  );
};

export {
    MisterGifApp
};
