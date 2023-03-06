import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



const GifGrid = ({category}) => {

    const {gifs, isLoading} = useFetchGifs(category);
    console.log(gifs, isLoading);
    /*
    
``  */
    return (
        <>
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
        </>
    );
};

export { GifGrid };
