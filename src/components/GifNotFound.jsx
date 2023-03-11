import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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
