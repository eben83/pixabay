import React, {} from 'react';
import styled from "styled-components";

const Layout = ({children}) => {
  return (
    <>
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: #F8F8F8;
`

export default Layout;