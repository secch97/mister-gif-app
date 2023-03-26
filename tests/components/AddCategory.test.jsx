import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('<AddCategory/> testing', () => { 
    test('1. Should change the value of the input text', () => { 
        render(<AddCategory onAddCategory={()=>{}}/>);
        const input = screen.getByRole("textbox");
        fireEvent.input(input, {target:{value:"Saitama"}});
        expect(input.value).toBe("Saitama");
    });
 });