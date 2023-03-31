import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('<GidGrid/> Testing.', () => { 
    const category = "One punch";

    test('1. Should show at first a loading screen' , () => { 
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });
        render(<GifGrid category={category} firstPosition={false}/>);
        screen.debug();
        expect(screen.getByText("Loading...")).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
     });

     test('2. Should show items when gifs are loaded', () => { 
       const gifs = [
        {
            id: "ABC",
            title: "Saitama",
            url: "https://localhost/saitama.png"
        },
        {
            id: "DEF",
            title: "Goku",
            url: "https://localhost/goku.png"
        }
       ];

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} firstPosition={false}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
      });
 });