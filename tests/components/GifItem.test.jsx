import { render, screen } from "@testing-library/react";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GifItem } from "../../src/components/GifItem";

describe('<GifItem/> functional component testing', () => { 
    const title="Resident Evil 4 GIF";
    const url="https://media3.giphy.com/media/3O5T95ObSlwNuhBMel/giphy-downsized-medium.gif?cid=07c6a097a0l41j9v8vtpjbwnk4orhzjtc6sk75d1tt65t82e&rid=giphy-downsized-medium.gif&ct=g";
    const category="Resident Evil 4";
    
    test('1. Snapshot needs to be matched', () => { 
        const {container}=render(<GifItem title={title} url={url} category={category}/>);
        expect(container).toMatchSnapshot();
     });

     test('2. Needs to show the image with the given URL and ALT', () => { 
        render(<GifItem title={title} url={url} category={category}/>);
        //screen.debug();
        const {src, alt} = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
      });

      test('3. Needs to show the GIF title', () => { 
        render(<GifItem title={title} url={url} category={category}/>);
        expect(screen.getByText(title)).toBeTruthy();
       });

 });