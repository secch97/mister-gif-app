import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('<AddCategory/> testing', () => { 
    test('1. Should change the value of the input text', () => { 
        render(<AddCategory onAddCategory={()=>{}}/>);
        const input = screen.getByRole("textbox");
        fireEvent.input(input, {target:{value:"Saitama"}});
        expect(input.value).toBe("Saitama");
    });

    test('2. Check that onSubmit is being triggered', () => { 
        const inputValue = "Saitama";
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory}/>);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        fireEvent.input(input, {target:{value:inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBeFalsy();
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
     });

     test('No debe de llamar el onAddCategory si el input esta vacio', () => { 
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory}/>); 
        const form = screen.getByRole("form");
        fireEvent.submit(form);
        expect(onAddCategory).toHaveBeenCalledTimes(0);
      });
 });