// OverlayWrapper.js
import React, { useEffect } from 'react';
import Loader from './loader';
import './OverlayWrapper.css';

const OverlayWrapper = ({ isLoading, children }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <div className={`overlay-wrapper ${isLoading ? 'loading' : ''}`}>
      {isLoading && (
            <Loader />
      )}
      <div className="content">{children}</div>
    </div>
  );
};

export default OverlayWrapper;
