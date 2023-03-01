import {useState} from 'react';
import { AddCategory } from './components/AddCategory';

const MisterGifApp = () => {

    const [categories, setCategories] = useState(["Mr. Robot", "Red Dead Redemption 2"]);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories.filter((category) => category!==newCategory)]);
    };


  return (
    <>
        {/* Title */}
        <h1>Mister GIF</h1>
        
        {/* Input */}
        <AddCategory onAddCategory={onAddCategory}></AddCategory>

        {/* GIF list */}
        <ol>
            {
                categories.map((category, i) => {
                    return (
                    <li key={category}>
                        {category}
                    </li>
                    );
                })
            }
        </ol>
            {/* GIF Items */}

    </>
  );
};

export {
    MisterGifApp
};
