import {useState} from 'react';
import { AddCategory, GifGrid } from './components/';

const MisterGifApp = () => {

    const [categories, setCategories] = useState(["Red Dead Redemption 2"]);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories.filter((category) => category.toLowerCase()!==newCategory.toLowerCase())]);
    };


  return (
    <>
        <h1>Mister GIF</h1>
        

        <AddCategory onAddCategory={onAddCategory}></AddCategory>

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
