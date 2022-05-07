import React, {useEffect, useState} from 'react';
import axios from "axios";
import Image from "./image";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

import {Container} from "react-bootstrap";

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
  
  const handleImageClick = (data) => {
    console.log(data)
  }
  
  return (
    <>
      <Container fluid className='home'>
        <Wrapper>
          {data && data.map((item) => {
            return (
              <div onClick={handleImageClick}>
                <Image
                  src={item.previewURL}
                  alt={item.tags}
                  onClick={handleImageClick}
                />
              </div>
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
        />
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export default Home;