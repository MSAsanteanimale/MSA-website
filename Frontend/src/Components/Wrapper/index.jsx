import React, { useEffect } from 'react';

const Wrapper = ({ children,sideBarOpen, setSideBarOpen}) => {

  return <div className={`wrapper ${sideBarOpen ? 'sbShow' : 'sbHide'}`} onClick={()=> setSideBarOpen(false)}>{children}</div>;
};

export default Wrapper;
