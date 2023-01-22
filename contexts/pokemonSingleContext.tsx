import { createContext, useState } from "react";
import React from "react";

export type pokemonSingleContextType = {
  isShinyActive: boolean;
  isSwapGenderActive: boolean
  buttonShiny: () => void;
  buttonSwapGender: () => void;
};

export const pokemonSingleContext =
  createContext<pokemonSingleContextType | null>(null);

const PokemonSingleContextProvider = ({ children }: any) => {
  const [isShinyActive, setIsShinyActive] = useState(false);
  const [isSwapGenderActive, setIsSwapGenderActive] = useState(false);

  const buttonShiny = () => {
    setIsShinyActive(!isShinyActive);
  };

  const buttonSwapGender = () => {
    setIsSwapGenderActive(!isSwapGenderActive);
  };

  const value: pokemonSingleContextType = {
    buttonShiny,
    isShinyActive,
    buttonSwapGender,
    isSwapGenderActive,
  };

  return (
    <pokemonSingleContext.Provider value={value}>
      {children}
    </pokemonSingleContext.Provider>
  );
};

export default PokemonSingleContextProvider;
