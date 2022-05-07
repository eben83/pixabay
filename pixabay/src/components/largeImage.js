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
        <img src={image.largeImageURL} alt={'test'} />
        <Context>
          <div className='row justify-content-evenly'>
            <div className='col-4 col-md-3  d-flex flex-column align-content-around text-center'>
              <label>
                <FontAwesomeIcon icon={faUser} className='pr-1' />
                <p className='ml-1'>User</p>
              </label>
              <div>{image.user}</div>
            </div>
            <div className='col-4 col-md-3  d-flex flex-column align-content-around text-center'>
              <label>
                <FontAwesomeIcon icon={faTag} className='pr-1' />
                <p className='ml-1'>Tags</p>
              </label>
              <div>{image.tags}</div>
            </div>
            <div className='col-4 col-md-3  d-flex flex-column align-content-around text-center'>
              <label>
                <FontAwesomeIcon icon={faUsersViewfinder} className='pr-1' />
                <p className='ml-1'>Views</p>
              </label>
              <div>{image.views}</div>
            </div>
            <div className='col-4 col-md-3  d-flex flex-column align-content-around text-center'>
              <label>
                <FontAwesomeIcon icon={faDownload} className='pr-1' />
                <p className='ml-1'>Downloads</p>
              </label>
              <div>{image.downloads}</div>
            </div>
            <div className='col-4 col-md-3 d-flex flex-column align-content-around text-center'>
              <label>
                <FontAwesomeIcon icon={faDownload} className='pr-1' />
                <p className='ml-1'>Size</p>
              </label>
              <div>{image.imageSize}</div>
            </div>
          </div>
        </Context>
        
        <UserImage>
          <img src={image.userImageURL}  alt={'image'}/>
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
  img {
    object-fit: cover;
    width: 100vw;
    height: 99vh;
  }
`

const Context = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  }
`

const BackButton = styled.div`
    position: fixed;
    left: 20px;
    background-color: lightblue;
    top: 20px;
    border-radius: 50px;
    z-index: 1000;
    cursor: pointer;
    padding: 0.5rem;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    .bg-icon {
      font-size: 2rem;
      color: white;
    }
`
export default LargeImage;