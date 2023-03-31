import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MisterGifApp } from "../../src/MisterGifApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import { loadPage } from "../../src/helpers/loadPage";
import { act } from "react-dom/test-utils";
import { scrollToTop } from "../../src/helpers/scrollToTop";

describe('MisterGifApp testing', () => { 
    window.scrollTo = jest.fn();

     test('Should match snapshot', () => { 
        const {container} = render(<MisterGifApp></MisterGifApp>);
        expect(container).toMatchSnapshot();
      });

     test('Should stop loading after 1s', () => { 
        jest.useFakeTimers();
        render(<MisterGifApp/>);
        act(()=>jest.advanceTimersByTime(1000));
        expect(screen.getByText("Trending")).toBeTruthy();
      });

      test('Should add a new category when submitting form', () => { 
        jest.useFakeTimers();
        render(<MisterGifApp/>);
        act(()=>jest.advanceTimersByTime(1000));
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        fireEvent.input(input, {target:{value:"Mr Robot"}});
        fireEvent.submit(form);
        expect(screen.getAllByRole("heading", {level: 1}).length).toBe(2);
        expect(screen.getByText("Mr Robot")).toBeTruthy();
        window.scrollTo.mockClear();
      });

      test('Should add a new category when clicking the button', () => { 
        jest.useFakeTimers();
        render(<MisterGifApp/>);
        act( () => jest.advanceTimersByTime(1000));
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");
        console.log(button);
        fireEvent.input(input, {target:{value: "Mr Robot"}})
        fireEvent.click(button);
        screen.debug();
        expect(screen.getAllByRole("heading", {level:1}).length).toBe(2);
        expect(screen.getByText("Mr Robot")).toBeTruthy();
    });
 });