const getGifs = async(category) => {
    const url = category==='Trending'?`https://api.giphy.com/v1/gifs/trending?api_key=FWCszwwyG9YJM5R3VACQkGLUQBl2M7Qe&limit=12`:`https://api.giphy.com/v1/gifs/search?api_key=FWCszwwyG9YJM5R3VACQkGLUQBl2M7Qe&q=${category}&limit=12`;
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",

    });
    const {data} = await response.json();

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        };
    });

    return (gifs);
};

export {
    getGifs
};