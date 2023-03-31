import { getGifs } from "../../src/helpers/getGifs";

describe('Helper functions testing: getGifs()', () => { 
    test('1. Must return an array of gifs', async() => { 
        const gifs = await getGifs("Trending");
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            }
        );
     });
 });