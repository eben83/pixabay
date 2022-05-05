import React, {} from 'react';

import './image.xs.css'

const Image = ({src, alt}) => {
  return (
    <>
      <div className='image'>
        <div className='previewImage'>
          <img src={src} alt={alt} />
        </div>
      </div>
    </>
  );
}
export default Image;