import React from 'react';

const GifItem = ({category, title, url}) => {
    console.log(title, url);
  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title.trim() ? title:`${category} GIF`}</p>
    </div>
  )
};

export {
    GifItem
}
