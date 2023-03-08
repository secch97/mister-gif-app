import React from 'react';

const GifItem = ({category, title, url}) => {
  return (

    <div className="card">
        <img src={url} alt={title}/>
        <span>{title.trim() ? title:`${category} GIF`}</span>
    </div>
  )
};

export {
    GifItem
}
