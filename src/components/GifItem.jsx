import React from 'react';
/* Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

const GifItem = ({category, title, url}) => {
  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    toast.success('Link copied to clipboard!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="card">
        <img src={url} alt={title}/>
        <FontAwesomeIcon className={"gifButton"} icon={['fas', 'link']} size={"2x"} onClick={copyUrl}/>
        <span>{title.trim() ? title:`${category} GIF`}</span>
    </div>
  )
};

export {
    GifItem
}
