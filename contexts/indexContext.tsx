import { createContext, useState, useContext } from "react";
import React from "react";

type IndexContextType = {
  isFiltersActive: boolean;
  windowSize: {
    x: number;
    y: number;
  };
  toggleFilter: () => void;
};

export const IndexContext = createContext<IndexContextType | null>(null);

const IndexContextProvider = ({ children }: any) => {
  const [isFiltersActive, setIsFiltersActive] = useState(false);
  const [windowSize, setWindowSize] = useState({ x: 0, y: 0 });

  const toggleFilter = () => {
    setIsFiltersActive(!setIsFiltersActive);
  };

  const value = {
    isFiltersActive,
    windowSize,
    toggleFilter,
  };

  return (
    <IndexContext.Provider value={value}>{children}</IndexContext.Provider>
  );
};

export default IndexContextProvider;
