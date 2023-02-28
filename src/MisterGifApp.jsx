import {useState} from 'react';

const MisterGifApp = () => {

    const [categories, setCategories] = useState(["Mr. Robot", "Red Dead Redemption 2"]);

    const onAddCategory = () => {
        setCategories(() => {
            return ["Warzone 2", ...categories];
        });
    };


  return (
    <>
        {/* Title */}
        <h1>Mister GIF</h1>
        
        {/* Input */}

        {/* GIF list */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {
                categories.map((category) => {
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
