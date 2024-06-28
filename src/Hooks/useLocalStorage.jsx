import React, { useEffect, useState } from 'react'

const useLocalStorage = (intialState, key) => {
    const [value, setValue] = useState(() => {
        const storedValues = localStorage.getItem(key);
        return JSON.parse(storedValues || `${intialState}`);
      });
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [value]);
    
  return [value, setValue]
}

export default useLocalStorage