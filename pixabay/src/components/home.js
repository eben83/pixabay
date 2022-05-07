import React, {useEffect, useState} from 'react';
import axios from "axios";
import Image from "./image";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import Slider from 'react-rangeslider'

import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([])
  const [page , setPage] = useState(1)
  const[pageCount, setPageCount] = useState(0)
  
  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&page=${page}`)
      .then((response) => {
        setData(response.data.hits)
        const total = response.data.totalHits
        setPageCount(Math.ceil(total / 20))
      })
  }, [page])
  
  const handlePageClick = (data) => {
    const currentPage = data.selected + 1
    setPage(currentPage)
  }
  
  return (
    <>
      <Container fluid className='home'>
        <div>
          Welcome to my Photo Viewer
        </div>
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
                    src={item.previewURL}
                    alt={item.tags}
                  />
                </div>
              </Link>
            )
          })}
        </Wrapper>
        <PaginationWrapper>
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
        </PaginationWrapper>
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PaginationWrapper = styled.div`
`
export default Home;