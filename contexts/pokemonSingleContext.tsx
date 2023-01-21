import { createContext, useState } from "react";
import React from "react";

export type pokemonSingleContextType = {
  isShinyActive: boolean;
  buttonShiny: () => void;
};

export const pokemonSingleContext =
  createContext<pokemonSingleContextType | null>(null);

const PokemonSingleContextProvider = ({ children }: any) => {
  const [isShinyActive, setIsShinyActive] = useState(false);

  const buttonShiny = () => {
    setIsShinyActive(!isShinyActive);
    console.log("shiny!")
    console.log(isShinyActive)
  };

  const value: pokemonSingleContextType = {
    buttonShiny,
    isShinyActive: false,
  };

  return (
    <pokemonSingleContext.Provider value={value}>
      {children}
    </pokemonSingleContext.Provider>
  );
};

export default PokemonSingleContextProvider;
