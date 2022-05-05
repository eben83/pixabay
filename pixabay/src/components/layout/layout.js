import React, {} from 'react';

import './layout.xs.css'
import './layout.sm.css'
import './layout.md.css'
import './layout.lg.css'
import './layout.xl.css'

const Layout = ({children}) => {
  return (
    <>
      <div className='layout'>
        {children}
      </div>
    </>
  );
}
export default Layout;