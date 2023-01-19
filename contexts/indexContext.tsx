import { createContext, useState, useContext, MouseEventHandler } from "react";
import React from "react";

export type IndexContextType = {
  isFiltersActive: boolean;
  windowSize: {
    x: number;
    y: number;
  };
  toggleFilter: ()=>void;
};

export const IndexContext = createContext<IndexContextType | null>(null);

const IndexContextProvider = ({ children }: any) => {
  let [isFiltersActive, setIsFiltersActive] = useState(false);
  const [windowSize, setWindowSize] = useState({ x: 0, y: 0 });

  const toggleFilter = () => {
    setIsFiltersActive(!isFiltersActive);
    
  };

  const value:IndexContextType = {
    isFiltersActive,
    windowSize,
    toggleFilter,
  };

  return (
    <IndexContext.Provider value={value}>{children}</IndexContext.Provider>
  );
};

export default IndexContextProvider;
