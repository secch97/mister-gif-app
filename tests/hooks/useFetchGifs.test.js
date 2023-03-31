import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs testing', () => { 
    test('1. Should return initial state', () => { 
        const {result} = renderHook( () => useFetchGifs("One punch"));
        const {gifs, isLoading} = result.current;
        console.log(result, gifs, isLoading);
        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();     
     });

     test('2. Should return an array of gifs and isLoading false', async () => { 
        const {result} = renderHook( () => useFetchGifs("One punch"));
        await waitFor( () => expect(result.current.gifs.length).toBeGreaterThan(0))
        const {gifs, isLoading} = result.current;
        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
 });