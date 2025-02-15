import React, { useEffect, useState } from 'react';
import CustomCursor from './CustomCursor';
const AdaptiveCursor = ({ variant }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };
    
    checkTouchDevice();
    
    // Recheck on resize in case of device orientation changes
    window.addEventListener('resize', checkTouchDevice);
    
    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);
  
  // Don't render cursor on touch devices
  if (isTouchDevice) {
    return null;
  }
  
  // Render cursor on non-touch devices
  return <CustomCursor variant={variant} />;
};

export default AdaptiveCursor;