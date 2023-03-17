import React from 'react';
/* Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GifNotFound = ({message}) => {
  return (
    <>
      <div className='not-found'>
        <FontAwesomeIcon icon={["fas", "face-sad-cry"]} size={"6x"} beatFade/>
        <h2>{message}</h2>
      </div>
    </>
  );
};

export {
  GifNotFound
};
