import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe('<GidGrid/> Testing.', () => { 
    const category = "One punch";

    test('1. Should show at first a loading screen' , () => { 
        render(<GifGrid category={category} firstPosition={false}/>);
        screen.debug();
        expect(screen.getByText("Loading...")).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
     });

     test('2. Should show items when gifs are loaded', () => { 

      });
 });