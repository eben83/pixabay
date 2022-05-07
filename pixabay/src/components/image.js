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
`
export default Image;