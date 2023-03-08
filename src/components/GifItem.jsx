import React from 'react';

const GifItem = ({category, firstPosition, title, url}) => {
  return (

    <div className={firstPosition ? 'card animate__animated animate__fadeInDown' : 'card'}>
        <img src={url} alt={title}/>
        <span>{title.trim() ? title:`${category} GIF`}</span>
    </div>
  )
};

export {
    GifItem
}
