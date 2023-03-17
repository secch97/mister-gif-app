/* Components */
import { GifItem, GifNotFound } from "./";
/* Hooks */
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({category, firstPosition}) => {
    /* Custom hook */
    const {gifs, isLoading} = useFetchGifs(category);
    
    /* App rendering */
    let gifGridRendered;
    if (typeof gifs === "object") {
        gifGridRendered = (
            <>
                <div className="card-grid">
                    {
                        gifs.map((gif) => {
                            return (
                                <GifItem
                                    key={gif.id}
                                    category={category}
                                    {...gif}
                                />
                            );
                        })
                    }
                </div>
            </>
        );
    } else{
        gifGridRendered = (
            <div className="not-found-container">
                <GifNotFound message={gifs}></GifNotFound>
            </div>
        );
    }

    return (
        <>
            <div className={firstPosition ? 'card-grid-container animate__animated animate__fadeInDown' : 'card-grid-container'}>
                <h1>{category}</h1> 
                    {
                        isLoading ? (<h2>Loading...</h2>) : null
                    }
                {gifGridRendered}
            </div>
        </>
    );
};

export { GifGrid };
