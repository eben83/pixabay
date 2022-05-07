import React, {} from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faDownload, faTag, faUser, faUsersViewfinder} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const LargeImage = (props) => {
  console.log(props.location.state)
  const image = (props.location.state)
  return (
    <>
      <Wrapper>
        <img src={image.fullHDURL} alt={image.tags} />
        <Context>
          <div>
            <label>
              <FontAwesomeIcon icon={faUser} className='pr-1' />
              <p className='ml-1 mb-0 fw-bold'>User</p>
            </label>
            <div>{image.user}</div>
          </div>
          <div>
            <label>
              <FontAwesomeIcon icon={faTag} className='pr-1' />
              <p className='ml-1 mb-0 fw-bold'>Tags</p>
            </label>
            <div>{image.tags}</div>
          </div>
          <div>
            <label>
              <FontAwesomeIcon icon={faUsersViewfinder} className='pr-1' />
              <p className='ml-1 mb-0 fw-bold'>Views</p>
            </label>
            <div>{image.views}</div>
          </div>
          <div>
            <label>
              <FontAwesomeIcon icon={faDownload} className='pr-1' />
              <p className='ml-1 mb-0 fw-bold'>Downloads</p>
            </label>
            <div>{image.downloads}</div>
          </div>
          <div>
            <label>
              <FontAwesomeIcon icon={faDownload} className='pr-1' />
              <p className='ml-1 mb-0 fw-bold'>Size</p>
            </label>
            <div>{image.imageSize}</div>
          </div>
        </Context>
        
        <UserImage>
          {image.userImageURL && 
            <img src={image.userImageURL}  alt={'image'}/>
          }
        </UserImage>
      </Wrapper>

      <Link
        to={'/'}>
        <BackButton>
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className=" bg-icon"
          />
        </BackButton>
      </Link>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0.2rem 0.1rem 0.5rem 0.1rem;
  img {
    object-fit: cover;
    width: 100vw;
    height: 99vh;
    box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
  }
`

const Context = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
  width: 100vw;
  
  div {
    width: 8rem;
    height: auto;
    text-align: center;
    margin: 0.4rem;
    color: #0074FF;
    
    p {
      color: #000000;
    }
  }
`

const UserImage = styled.div`
  
  img {
    border: 1px solid black;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    position: absolute;
    top: 1rem;
    right: 2rem;
    box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
  }
  
`

const BackButton = styled.div`
    position: fixed;
    left: 20px;
    background-image: linear-gradient(to right, #00C3FF, #0074FF);
    top: 20px;
    border-radius: 50px;
    z-index: 1000;
    cursor: pointer;
    padding: 0.5rem;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    border: 1px solid blue;
    .bg-icon {
      font-size: 2rem;
      color: white;
    }
`
export default LargeImage;