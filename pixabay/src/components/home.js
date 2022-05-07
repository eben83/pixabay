import React, {useEffect, useState} from 'react';
import axios from "axios";
import Image from "./image";
import styled from "styled-components";

import {Container} from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15')
      .then((response) => {
        setData(response.data.hits)
        console.log("DATA", response.data)
      })
  }, [])
  console.log("DATA 2", data)
  
  return (
    <>
      <Container fluid className='home'>
        <Wrapper>
          {data && data.map((item) => {
            return (
              <Image src={item.previewURL} alt={'test'} />
            )
          })}
        </Wrapper>
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default Home;