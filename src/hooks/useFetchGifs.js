import React, { useEffect, useState } from 'react'
import {getGifs} from '../helpers/getGifs.js'

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getGifsData = async () => {
        const gifsData = await getGifs(category);
        setGifs(gifsData);
        setIsLoading(false);
        console.log("fetch");

    };  

    //useEffect hook
    useEffect(() => {
        getGifsData();
    }, [ ])


    return {
        gifs: gifs,
        isLoading: isLoading
    };
}
