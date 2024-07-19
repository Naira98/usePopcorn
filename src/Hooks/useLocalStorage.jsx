import { useEffect, useState } from "react";

const useLocalStorage = (intialState, key) => {
  const [value, setValue] = useState(() => {
    const storedValues = localStorage.getItem(key);
    console.log(storedValues);
    // return JSON.parse(storedValues || JSON.stringify(intialState));
    return storedValues ? JSON.parse(storedValues) : intialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
