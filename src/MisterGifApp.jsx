import {useState} from 'react';
import { AddCategory, GifGrid } from './components/';
import { NavigationBar } from './components/NavigationBar';


const MisterGifApp = () => {

    const [categories, setCategories] = useState(["Trending"]);
    const [scroll, setScroll] = useState(0);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories.filter((category) => category.toLowerCase()!==newCategory.toLowerCase())]);
    };

    return (
        <>
            <NavigationBar onAddCategory={onAddCategory} ></NavigationBar>
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
