import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

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
            categories.map((category) => 
                (
                    <GifGrid 
                        key={`${category}`}
                        category={category}
                    />
                )
            )
        }

    </>
  );
};

export {
    MisterGifApp
};
