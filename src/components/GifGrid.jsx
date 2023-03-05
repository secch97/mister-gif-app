import {useEffect, useState} from "react";

import { GifItem } from "./GifItem";

import { getGifs } from "../helpers/getGifs";



const GifGrid = ({category}) => {

    const [gifs, setGifs] = useState([]);

    const getGifsData = async () => {
        const gifsData = await getGifs(category);
        setGifs(gifsData);
    };  

    //useEffect hook
    useEffect(() => {
        getGifsData();
    }, [ ])

    return (
        <>
            <h3>{category}</h3> 
            <div className="card-grid">
                {
                    gifs.map(({id, title}) => {
                        return (
                            <GifItem/>
                        );
                    })
                }
            </div>
        </>
    );
};

export { GifGrid };
