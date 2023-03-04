import {useState} from "react";

const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        let newInputValue = event.target.value;
        setInputValue(newInputValue);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newCategory = inputValue.trim();
        if(!newCategory){
            return;
        }
        onAddCategory(newCategory);
        setInputValue("");
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Search GIFs" 
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

export { AddCategory };
