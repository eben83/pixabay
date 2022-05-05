import React, {} from 'react';

const Layout = ({children}) => {
  return (
    <>
      <div className='layout'>
        {/*<NavMenu media={media}/>*/}
        {children}
      </div>
    </>
  );
}
export default Layout;