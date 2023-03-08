import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



const GifGrid = ({category, firstPosition}) => {

    const {gifs, isLoading} = useFetchGifs(category);
    /*
``  */
    console.log(category);
    return (
        <>
            <div className={firstPosition ? 'card-grid-container animate__animated animate__fadeInDown' : 'card-grid-container'}>
                <h3>{category}</h3> 
                {
                    isLoading ? (<h2>Loading...</h2>) : null
                }
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
            </div>    
        </>
    );
};

export { GifGrid };
