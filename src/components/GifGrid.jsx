import {useEffect, useState} from "react";
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
            <ol>
                {
                    gifs.map(({id, title}) => {
                        return (
                            <li key={id}>{title}</li>
                        );
                    })
                }
            </ol>
        </>
    );
};

export { GifGrid };
