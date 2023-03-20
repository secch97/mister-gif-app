/* Helpers */
import { scrollToTop } from "../helpers/scrollToTop";
/* Hooks */
import {useState} from "react";

const AddCategory = ({onAddCategory}) => {
    // Hooks
    const [inputValue, setInputValue] = useState("");

    // Element handlers
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
        scrollToTop();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Search GIFs by category" 
                value={inputValue}
                onChange={onInputChange}
            />
            <button 
                type="submit"
            > 
                Search 
            </button>
        </form>
    );
};

export { AddCategory };
