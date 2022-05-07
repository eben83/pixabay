import React, {useEffect, useState} from 'react';
import axios from "axios";
import Image from "./image";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([])
  const [page , setPage] = useState(1)
  const[pageCount, setPageCount] = useState(0)
  const [value, setValue] = useState(20)
  const [number , setNumber] = useState(0)
  
  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&page=${page}&per_page=${value}`)
      .then((response) => {
        setData(response.data.hits)
        const total = response.data.totalHits
        setPageCount(Math.ceil(total / value))
      })
  }, [page, value])
  
  const handlePageClick = (data) => {
    const currentPage = data.selected + 1
    setPage(currentPage)
    window.scrollTo(0,0)
    console.log()
  }
  
  const handleChange = (value) => {
    setValue(value)
  }
  
  return (
    <>
      <Container fluid className='home'>
        <HeaderWrapper>
          <h1 className='text-center'>
            Welcome to my image viewer
          </h1>
          <br className='mx-3' />
          <div>
            <SliderWrapper >
              <div className='d-flex justify-content-center'>
                <div className='slider'>
                  <label>You are able to increase the number of images per page</label>
                  <Slider
                    min={0}
                    max={200}
                    value={value}
                    onChange={handleChange}
                  />
                  <div>
                    Images per page:
                    <span className='fw-bold'> {value}</span>
                  </div>
                </div>
              </div>
            </SliderWrapper>
          </div>
        </HeaderWrapper>
        <br className='mx-3' />
        <Wrapper>
          {data && data.map((item) => {
            return (
              <Link
                key={item.id}
                to={{
                  pathname: '/largeImage',
                  state: item
                }}>
                <div >
                  <Image
                    src={item.webformatURL}
                    alt={item.tags}
                  />
                </div>
              </Link>
            )
          })}
        </Wrapper>
        
        <ReactPaginate
          pageCount={pageCount}
          breakLabel={'...'}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
          marginPagesDisplayed={2}
        />
        
      </Container>
    </>
  );
}

const HeaderWrapper = styled.div`
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #F8F8F8;
  margin-bottom: 1rem;
`
const SliderWrapper = styled.div`
  .slider {
    width: 50vw;
  }
`

export default Home;