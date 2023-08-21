import React from 'react'
import { useState, useEffect } from 'react';

const useWidth = () => {
    const [isWideScreen, setIsWideScreen] = useState(true);
    useEffect(() => {
        function handleResize() {
          setIsWideScreen(window.innerWidth); // Adjust the width threshold as needed
        }
    
        // Initial call to set the initial state
        handleResize();
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isWideScreen
}

export default useWidth