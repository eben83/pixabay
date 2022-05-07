import React, {} from 'react';
import styled from 'styled-components'

const Image = ({src, alt}) => {
  return (
    <>
      <Wrapper className='image'>
        <div className='previewImage'>
          <img src={src} alt={alt} />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0.5rem;
  
  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
  }
  @media(min-width: 576px) {
    img {
      width: 15rem;
      height: 15rem;
    }
  }
  @media(min-width: 768px) {
    img {
      width: 20rem;
      height: 20rem;
      margin-bottom: 2.5rem;
    }
  }
  @media(min-width: 992px) {
    img {
      width: 30rem;
      height: 30rem;
    }
  }
`
export default Image;